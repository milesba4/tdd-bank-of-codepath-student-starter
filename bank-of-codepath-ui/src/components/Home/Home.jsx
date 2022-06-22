import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import { useEffect } from 'react';
import axios from "axios"


export default function Home({transactions,setTransactions,transfers,setTransfers,error,setError,isLoading,setIsLoading,filterInputValue}) {
   useEffect(async() => {
    setIsLoading(true);
    try{
      const response = await axios.get('http://localhost:3001/bank/transactions')
      setTransactions(response)
      console.log("response1=", response)
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
      
    }
    catch (error){
      setError(error)
      console.log("error2=", error)
    }
    setIsLoading(true);
  
  }, []);

  console.log(transactions) // checking transactions

  let filteredTransactions =[]

  function filterTransactions(transactions){
    if(filterInputValue!=""){
      return ((transactions || []).filter((e)=>e.description.toLowerCase().includes(filterInputValue.toLowerCase())))

    }else{
    return transactions
    }
  }

filteredTransactions=filterTransactions(transactions)

  return (
    <div className="home">
      <AddTransaction/>
      {isLoading? <h1 className="loading-text"> ...loading</h1>:  <BankActivity transactions ={filteredTransactions}/> }

    </div>

  
  )

}
