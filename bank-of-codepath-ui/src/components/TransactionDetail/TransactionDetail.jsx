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
        const response = await axios.get('http://localhost:3001/bank/transactions/'+ transactionId)
        if(response?.data?.transaction){
          setTransaction(response.data.transaction)}
        console.log("fetchresponse1=", response)
      }
      catch (error){
        setError(error)
        console.log("fetcherror=", error)
      }
      setIsLoading(false);
      setHasFetched(true);
    }
    fetchTransactionById()
    }, [transactionId]);
    console.log("transactionId=", transactionId)

  return (
    <div className="transaction-detail">
      <TransactionCard transaction={transaction} setIsLoading={setIsLoading} transactionId = {transactionId} isLoading={isLoading} setHasFetched={setHasFetched} hasFetched={hasFetched}/>
    </div>
  )
}

export function TransactionCard({ transaction = {}, transactionId = null }) {
export function TransactionCard({ transaction , transactionId ,setIsLoading, isLoading,setHasFetched, hasFetched}) {

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
