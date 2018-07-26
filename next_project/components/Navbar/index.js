import React, { Component } from "react";
import Link from 'next/link';
import './Navbar.scss'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="navbar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <mark className="marked">
          Marked text!
        </mark>
      </div>
    );
  }
}

export default Navbar;
