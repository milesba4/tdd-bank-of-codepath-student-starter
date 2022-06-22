import * as React from "react"
import AddTransaction from "../AddTransaction/AddTransaction"
import BankActivity from "../BankActivity/BankActivity"
import "./Home.css"
import { useEffect } from 'react';
import axios from "axios"


export default function Home({transactions,setTransactions,transfers,setTransfers,error,setError,isLoading,setIsLoading,filterInputValue}) {
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
