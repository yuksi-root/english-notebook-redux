import React from "react";
import "./navi.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import MyListSummary from "../myList/MyListSummary";
import {Link} from "react-router-dom"
export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" light expand="md">
          <NavbarBrand>
           <Link className="nav_link" to="/">English Notebook</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link className="nav_link" to="/saveWord">Add New Word</Link></NavLink>
              </NavItem>
              <MyListSummary/>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}
