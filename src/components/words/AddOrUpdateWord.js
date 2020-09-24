import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLists } from "../../redux/actions/listActions";
import { saveWord } from "../../redux/actions/wordActions";
import WordDetail from "./WordDetail";
function AddOrUpdateWord({
  words,
  lists,
  getWords,
  getLists,
  saveWord,
  history,
  ...props //proplarını ekle
}) {
  const [word, setWord] = useState({ ...props.word }); //word deki state i setWord ile set edebiliriz.
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (lists.length === 0) {
      //direk linkten geldiyse
      getLists(); //listeyi getir
    }
    setWord({ ...props.word });
  }, [props.word]);

  function handleChange(event) {
    const { name, value } = event.target;
    setWord((previousWord) => ({
      ...previousWord,
      [name]: name === "listId" ? parseInt(value, 10) : value,
    }));
    validate(name, value);
  }

  function validate(name, value) {
    switch (name + value) {
      case "engWordName" + "":
        setErrors((previousErrors) => ({
          ...previousErrors,
          engWordName: "EN Word Name must be filled.",
        }));
        break;
      case "trWordName" + "":
        setErrors((previousErrors) => ({
          ...previousErrors,
          trWordName: "TR Word Name must be filled.",
        }));
        break;
      case "engSentence" + "":
        setErrors((previousErrors) => ({
          ...previousErrors,
          engSentence: "English Sentence must be filled.",
        }));
        break;
      case "trSentence" + "":
        setErrors((previousErrors) => ({
          ...previousErrors,
          trSentence: "Turkish Sentence must be filled.",
        }));
        break;
      case "listId" + "":
        setErrors((previousErrors) => ({
          ...previousErrors,
          listId: "List Name must be select.",
        }));
        break;
      default:
        setErrors((previousErrors) => ({
          ...previousErrors,
          engWordName: "",
          trWordName: "",
          engSentence: "",
          trSentence: "",
        }));
        break;
    }
  }

  function handleSave(event) {
    event.preventDefault(); //sayfanın refresh olmasını engeller.
    saveWord(word).then(() => {
      history.push("/");
    });
  }

  return (
    <WordDetail
      word={word}
      lists={lists}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getWordById(words, wordId) {
  let word = words.find((word) => word.id == wordId) || null;
  return word;
}

function mapStateToProps(state, ownProps) {
  const wordId = ownProps.match.params.wordId;
  const word =
    wordId && state.wordListReducer.length > 0
      ? getWordById(state.wordListReducer, wordId)
      : {};
  return {
    word,
    words: state.wordListReducer,
    lists: state.listReducer,
  };
}

const mapDispatchToProps = {
  getLists,
  saveWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateWord);
