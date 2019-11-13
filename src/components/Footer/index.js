import React from "react";
import "./index.scss";

export default function Footer() {
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
