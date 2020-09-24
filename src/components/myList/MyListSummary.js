import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import * as myListActions from "../../redux/actions/myListActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
class MyListSummary extends Component {
  removeFromMyList(word) {
    this.props.actions.removeFromMyList(word);
    alertify.error(word.engWordName + " remove from myList", 1);
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>My List Empty</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          MyList
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.myList.map((myListItem) => (
            <DropdownItem key={myListItem.word.id}>
              {myListItem.word.engWordName}{" "}
              <Badge
                color="danger"
                onClick={()=>this.removeFromMyList(myListItem.word)}
              >
                remove
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/myList"}>Go to MyList</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.myList.length > 0
          ? this.renderSummary()
          : this.renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyListSummary);
