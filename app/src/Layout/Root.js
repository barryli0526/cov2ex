import React, { Component } from 'react';
import { Navbar, Footer } from '../Components'
import './Root.css';

class Root extends Component {
  render() {
    return (
      <div className="co-container">
        <div className="co-navbar">
          <Navbar />
        </div>
        <div className="co-main">
          {this.props.children}
        </div>
        <div className="co-sidebar">
          
        </div>
        <div className="co-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Root;