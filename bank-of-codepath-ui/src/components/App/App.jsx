import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import TransactionDetail from "../TransactionDetail/TransactionDetail"

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}
