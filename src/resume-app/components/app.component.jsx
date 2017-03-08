import React, { Component } from 'react';
import Navbar from './navbar/navbar.component';
import Footer from "./footer.component.jsx";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
