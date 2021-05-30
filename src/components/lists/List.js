import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../../redux/actions/listActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as wordActions from "../../redux/actions/wordActions";
import "./list.css"
class List extends Component {
  componentDidMount() {
    this.props.actions.getLists();
  }

  selectList = (list) => {
    this.props.actions.changeList(list);
    this.props.actions.getWords(list.id)
  };
  render() {
    return (
      <div className="lists">
        <h3 className="list_title">Lists</h3>
        <ListGroup >
          {this.props.lists.map((list) => (
            <ListGroupItem 
              active={list.id === this.props.currentList.id}
              onClick={() => this.selectList(list)}
              key={list.id}
            >
              {list.listName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //list ' in proplarına (reducer)state i bagla
  return {
    currentList: state.changeListReducer,
    lists: state.listReducer,
  };
}

function mapDispatchToProps(dispatch) {
  //actionları proplara bagla
  return {
    actions: {
      getLists: bindActionCreators(listActions.getLists, dispatch),
      changeList: bindActionCreators(listActions.changeList, dispatch),
      getWords: bindActionCreators(wordActions.getWords, dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
