import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}
