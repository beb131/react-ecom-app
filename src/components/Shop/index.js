import React from "react";
import "./index.scss";
// import { Link } from "react-router-dom";
import RootCategories from "../Categories/RootCategories/index";

export default function Shop() {
  return (
    <>
      <section className="section" id="shop">
        <RootCategories />
      </section>
    </>
  );
}
