import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { getLists } from "../../redux/actions/listActions";
import { saveWord } from "../../redux/actions/wordActions";
import WordDetail from "./WordDetail";
import WordShow from "./WordShow";

function AddOrUpdateWord({
  words,
  lists,
  getWords,
  getLists,
  saveWord,
  history,
  ...props
}) {
  const [word, setWord] = useState({ ...props.word });
  const [errors, setErrors] = useState({
    engWordName: "EN Word Name must be filled.",
    trWordName: "TR Word Name must be filled.",
    engSentence: "English Sentence must be filled.",
    trSentence: "Turkish Sentence must be filled.",
    listId: "List Name must be select.",
  });

  function handleError() {
    if (word.id) {
      setErrors({
        engWordName: "",
        trWordName: "",
        engSentence: "",
        trSentence: "",
        listId: "",
      });
    }
  }
  useEffect(() => {
    if (lists.length === 0) {
      getLists();
    }
    handleError();
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
      case "engWordName" + value:
        if (value === "") {
          setErrors((previousErrors) => ({
            ...previousErrors,
            engWordName: "EN Word Name must be filled.",
          }));
        } else {
          setErrors((previousErrors) => ({
            ...previousErrors,
            engWordName: "",
          }));
        }
        break;
      case "trWordName" + value:
        if (value === "") {
          setErrors((previousErrors) => ({
            ...previousErrors,
            trWordName: "TR Word Name must be filled.",
          }));
        } else {
          setErrors((previousErrors) => ({
            ...previousErrors,
            trWordName: "",
          }));
        }
        break;
      case "engSentence" + value:
        if (value === "") {
          setErrors((previousErrors) => ({
            ...previousErrors,
            engSentence: "English Sentence must be filled.",
          }));
        } else {
          setErrors((previousErrors) => ({
            ...previousErrors,
            engSentence: "",
          }));
        }
        break;
      case "trSentence" + value:
        if (value === "") {
          setErrors((previousErrors) => ({
            ...previousErrors,
            trSentence: "Turkish Sentence must be filled.",
          }));
        } else {
          setErrors((previousErrors) => ({
            ...previousErrors,
            trSentence: "",
          }));
        }
        break;
      case "listId" + value:
        if (value === "") {
          setErrors((previousErrors) => ({
            ...previousErrors,
            listId: "List Name must be select.",
          }));
        } else {
          setErrors((previousErrors) => ({
            ...previousErrors,
            listId: "",
          }));
        }
        break;
      default:
        break;
    }
  }

  function handleSave(event) {
    event.preventDefault();
    if (
      errors.engSentence === "" &&
      errors.engWordName === "" &&
      errors.trSentence === "" &&
      errors.trWordName === "" &&
      errors.listId === ""
    )
      saveWord(word).then(() => {
        history.push("/");
      });
    else {
      alert("All blanks must be filled!");
    }
  }

  return (
    <Fragment>
      <WordShow word={word} lists={lists} />
      <WordDetail
        word={word}
        lists={lists}
        onChange={handleChange}
        onSave={handleSave}
        errors={errors}
      />
    </Fragment>
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
