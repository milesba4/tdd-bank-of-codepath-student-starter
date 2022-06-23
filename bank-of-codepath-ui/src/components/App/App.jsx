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
const [errors,seterrors] = React.useState(null)
const [filterInputValue, setFilterInputValue] = React.useState("")
const [newTransactionForm, setNewTransactionForm] = React.useState({category:"", description:"", amount:""})
const [isCreating,setIsCreating] = React.useState(false)
  return (
    <div className="app">
      <BrowserRouter>
      <main>
      <Navbar filterInputValue={filterInputValue} setFilterInputValue={setFilterInputValue}/>
      </main>
      <Routes>
      <Route path="/" element = {<Home 
      filterInputValue={filterInputValue} 
      isLoading={isLoading}
      setIsLoading = {setisLoading} 
      transfers = {transfers} 
      setNewTransactionForm={setNewTransactionForm} 
      newTransactionForm = {newTransactionForm} 
      isCreating = {isCreating} 
      setIsCreating = {setIsCreating} 
      error={errors} 
      setError={seterrors} 
      transactions = {transactions} 
      setTransfers = {setTransfers} 
      setTransactions = {setTransactions}

      />} />
        <Route path ="/transactions/:transactionId" element = {<TransactionDetail/>}/>
      </Routes>
      
      
    
      </BrowserRouter>
    </div>
  )
}
