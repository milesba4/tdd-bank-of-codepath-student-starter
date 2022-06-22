import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TransactionDetail from "../TransactionDetail/TransactionDetail"

export default function App() {
const [isLoading, setisLoading] = React.useState(false)
const [transactions,setTransactions] = React.useState([])
const [transfers, setTransfers] = React.useState([])
const [errors,seterrors] = React.useState("")
const [filterInputValue, setFilterInputValue] = React.useState("")
  return (
    <div className="app">
      <BrowserRouter>
      <main>
      <Routes>
        <Route path="/" element = {<Home error={errors} setError={seterrors} transactions = {transactions} setTransfers = {setTransfers} settransactions = {setTransactions}/>} />
        <Route path ="/transactions/:transactionId" element = {<TransactionDetail/>}/>
      </Routes>
      <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
      </main>
    
      </BrowserRouter>
    </div>
  )
}
