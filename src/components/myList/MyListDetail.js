import React, { Component } from "react";
import { connect } from "react-redux";
import * as myListActions from "../../redux/actions/myListActions";
import { bindActionCreators } from "redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"
class MyListDetail extends Component {
  removeFromMyList(word) {
    this.props.actions.removeFromMyList(word);
    alertify.error(word.engWordName + " remove from myList", 1);
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>English Word</th>
              <th>English Sentence</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.myList.map((myListItem) => (
              <tr key={myListItem.word.id}>
                <th scope="row">{myListItem.word.id}</th>
                <td>{myListItem.word.engWordName}</td>
                <td>{myListItem.word.engSentence}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromMyList(myListItem.word)}
                  >
                    Delete
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromMyList: bindActionCreators(
        myListActions.removeFromMyList,
        dispatch
      ),
    },
  };
}
function mapStateToProps(state) {
  return {
    myList: state.myListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListDetail);
