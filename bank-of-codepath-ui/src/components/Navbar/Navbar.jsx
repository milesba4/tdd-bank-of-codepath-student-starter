import * as React from "react"
import FilterInput from "../FilterInput/FilterInput"
import codepath from "../../assets/codepath.svg"
import avatar from "../../assets/avatar.png"
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar({}) {
  return (
  

    <nav className="navbar">
      <Logo/>
      <a className="logo">Logo</a>

      <div className="search">
        <FilterInput />
      </div>

      <div className="user">
        <div className="notifications">
          <i className="material-icons md-36">notifications</i>
          <div className="green-dot" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="info">
            <p>Person McPerson</p>
            <span>ID: 12345567</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function Logo() {
  return (
    <a className="logo">
     <Link><img src={codepath} alt="logo" /></Link> 
    </a>
  )
}
