import * as React from "react"
import { formatAmount, formatDate } from "../../utils/format"
import "./TransactionDetail.css"
import {useParams} from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios"

export default function TransactionDetail() {
  const[hasFetched,setHasFetched]=React.useState(false)
  const[transaction,setTransaction]=React.useState({})
  const[isLoading,setIsLoading]=React.useState(false)
  const[error,setError]=React.useState("")
  let {transactionId}=useParams();


  useEffect(async() => {
    async function fetchTransactionById(){
      setIsLoading(true);
      setHasFetched(false);
      try{
        const response = await axios.get('http://localhost:3001/bank/transactions/:transactionId')
        const response = await axios.get('http://localhost:3001/bank/transactions/'+ transactionId)
        if(response?.data?.transactions){
          setTransaction(response.data.transactions)}
        console.log("fetchresponse1=", response.data.transactions)
      }
      catch (error){
        setError(error)
        console.log("fetcherror=", error)
      }
      setIsLoading(false);
      setHasFetched(false);
    }
    fetchTransactionById()
    }, [transactionId]);


  return (
    <div className="transaction-detail">
      <TransactionCard />
    </div>
  )
}

export function TransactionCard({ transaction = {}, transactionId = null }) {
  return (
    <div className="transaction-card card">
      <div className="card-header">
        <h3>Transaction #{transactionId}</h3>
        <p className="category"></p>
      </div>

      <div className="card-content">
        <p className="description"></p>
      </div>

      <div className="card-footer">
        <p className={`amount ${transaction.amount < 0 ? "minus" : ""}`}>{formatAmount(transaction.amount)}</p>
        <p className="date">{formatDate(transaction.postedAt)}</p>
      </div>
    </div>
  )
}
