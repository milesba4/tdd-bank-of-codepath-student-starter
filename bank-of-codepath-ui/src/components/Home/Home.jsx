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
    return transactions
  }


export default function Home() {
  return (
    <div className="home">
      <AddTransaction />
      <BankActivity />
      <AddTransaction/>

    </div>

  
  )

}
