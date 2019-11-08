import React, { Component } from "react";
import "./index.scss";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>React Ecommerce App</strong> by{" "}
              <a
                href="https://github.com/beb131"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brandon Bachrach
              </a>
              .
            </p>
          </div>
        </footer>
      </>
    );
  }
}
