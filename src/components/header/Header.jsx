import React, { useState } from "react";
import "./header.css";
import logo from "../../local/assets/book-logo.png";
export default function Header(props) {
    const [query,setQuery] = useState("")


    const handleChange = (query) => {
        setQuery(query)
    }


  return (
    <nav className="navigation">
      <a href="/" className="navigation__logo">
        <img src={logo} width="60" height="50" alt="logo" />
      </a>
      <div className="navigation__search">
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e.target.value)}/>
        <button onClick={() => props.onSubmitHandler(query)}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </nav>
  );
}
