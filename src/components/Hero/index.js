import React, { Component } from "react";
//import { BrowserRouter as Router, Link } from "react-router-dom";

import "./index.scss";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <Router> */}
        <section className="hero is-fullheight">
          <div className="hero-head">
            <header className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a href="#" className="navbar-item"></a>
                  <span
                    className="navbar-burger burger"
                    data-target="navbarMenuHeroC"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <a href="#" className="navbar-item is-active">
                      Home
                    </a>
                    <a href="#" className="navbar-item">
                      Examples
                    </a>
                    <a href="#" className="navbar-item">
                      Documentation
                    </a>
                    <span className="navbar-item">
                      <a
                        href="#"
                        href="#"
                        className="button is-success is-inverted"
                      >
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">React Ecommerce App</h1>
              <h2 className="subtitle">Buy something will ya...</h2>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Modifiers</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                  </li>
                  <li>
                    <a href="#">Elements</a>
                  </li>
                  <li>
                    <a href="#">Components</a>
                  </li>
                  <li>
                    <a href="#">Layout</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        {/* </Router> */}
      </>
    );
  }
}
