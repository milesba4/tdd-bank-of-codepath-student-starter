import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import { useEffect } from 'react';
import axios from "axios"


export default function Home({setNewTransactionForm, newTransactionForm,isCreating, setIsCreating, transactions,setTransactions,transfers,setTransfers,error,setError,isLoading,setIsLoading,filterInputValue}) {
   useEffect(async() => {
    setIsLoading(true);
    try{
      const response = await axios.get('http://localhost:3001/bank/transactions')
      if(response?.data?.transactions){
        setTransactions(response.data.transactions)}
      console.log("response1=", response.data.transactions)
      console.log("transactions1",transactions)
    }
    catch (error){
      setError(error)
      
      console.log("error1=", error)
    }
    setIsLoading(false);
  }, []);

  useEffect(async() => {
    setIsLoading(true);
    try{
      const response = await axios.get('http://localhost:3001/bank/transfers')
      setTransfers(response.data.transfers)
      console.log("response2=", response)
      console.log("transactions1",transactions)
    }
    catch (error){
      setError(error)
      console.log("error2=", error)
    }
    setIsLoading(true);

  }, []);

  console.log("trans=",transactions) // checking transactions

  let filteredTransactions =[]

  function filterTransactions(transactions){
    if(filterInputValue!=""){
      console.log("transaction check=",transactions)
      return ((transactions || []).filter((e)=>e.description.toLowerCase().includes(filterInputValue.toLowerCase())))

    }else{
    return transactions
    }
  }


  async function handleOnCreateTransaction(){
  isCreating = true;
  try{
  const response = await axios.post('http://localhost:3001/bank/transactions',{
    transaction:newTransactionForm
  })
  setNewTransactionForm(current=>[...current, response.data.transaction])
  }
  catch(error){
    setError(error)
    setIsCreating(false)
  }
  }

  function handleOnSubmitNewTransaction(){
    handleOnCreateTransaction()

  }
  console.log("error",error)

filteredTransactions=filterTransactions(transactions)
console.log("transactions2=",filteredTransactions) // logging filteredTransactions
  return (
    <div className="home">
      <AddTransaction handleOnSubmit={handleOnSubmitNewTransaction} setForm = {setNewTransactionForm} form = {newTransactionForm} isCreating={isCreating} setIsCreating = {setIsCreating}/>
      {error?null:<h2 className="error"> Error</h2>}
      {isLoading? <h1 className="loading-text"> Loading...</h1>:  <BankActivity transactions ={filteredTransactions}/> }
     
    </div>

  
  )

}
