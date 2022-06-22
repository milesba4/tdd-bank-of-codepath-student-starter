import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"

export default function App() {
const [isLoading, setisLoading] = React.useState(false)
const [transactions,setTransactions] = React.useState([])
const [transfers, settransfers] = React.useState([])
const [errors,seterrors] = React.useState("")
const [filterInputValue, setfilterInputValue] = React.useState("")
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Home />
      </BrowserRouter>
    </div>
  )
}
