import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="hero is-fullheight">
          <div className="hero-head">
            <header className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <Link to="#" className="navbar-item"></Link>
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
                    <Link to="/" className="navbar-item is-active">
                      Home
                    </Link>
                    <Link to="/cart" className="navbar-item is-active">
                      <span>Cart</span>
                    </Link>
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
                    <Link to="#">Overview</Link>
                  </li>
                  <li>
                    <Link to="#">Modifiers</Link>
                  </li>
                  <li>
                    <Link to="#">Grid</Link>
                  </li>
                  <li>
                    <Link to="#">Elements</Link>
                  </li>
                  <li>
                    <Link to="#">Components</Link>
                  </li>
                  <li>
                    <Link to="#">Layout</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </>
    );
  }
}
