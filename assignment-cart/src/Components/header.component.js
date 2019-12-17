import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CartIcon from './cartIcon.component';
const Link = require("react-router-dom").Link;


class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerWrapper">
        <Navbar expand="lg" variant="dark" bg="primary">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <CartIcon itemCount={this.props.historyAddToCart}/>
              </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
