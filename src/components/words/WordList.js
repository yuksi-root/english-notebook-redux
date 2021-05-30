import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Table, Button } from "reactstrap";
import * as wordActions from "../../redux/actions/wordActions";
import * as myListActions from "../../redux/actions/myListActions";
import { Link } from "react-router-dom";
import "./words.css";

class WordList extends Component {
  componentDidMount() {
    this.props.actions.getWords();
  }
  addToMyList = (word) => {
    this.props.actions.addToMyList({ quantity: 1, word });
  };

  render() {
    return (
      <div className="words">
        <h3 className="words_title">
          Words {"  "}
          <Badge color="success">{this.props.currentList.listName}</Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>English Word</th>
              <th>English Sentence</th>
            </tr>
          </thead>
          <tbody>
            {this.props.words.map((word) => (
              <tr key={word.id}>
                <th scope="row">{word.id}</th>
                <td>
                  <Link to={"/saveWord/" + word.id}>{word.engWordName}</Link>
                </td>
                <td>{word.engSentence}</td>
                <td>
                  <Button
                    color="success"
                    onClick={() => this.addToMyList(word)}
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentList: state.changeListReducer,
    words: state.wordListReducer,
    myList: state.myListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getWords: bindActionCreators(wordActions.getWords, dispatch),
      addToMyList: bindActionCreators(myListActions.addToMyList, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
