import * as React from "react"
import "./AddTransaction.css"

export default function AddTransaction({setForm,form,isCreating, setIsCreating}) {
  let handleOnFormFieldChange = (evt) => {
    const {name, value} = evt.target
    
      setForm(current =>  ({
        ...current, [name]:value
      }))
    
  }
console.log("form=", form)
  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm form={form} setIsCreating = {setIsCreating} handleOnFormFieldChange = {handleOnFormFieldChange}/>
    </div>
  )
  }
export function AddTransactionForm({form,handleOnSubmit,handleOnFormFieldChange, isCreating,setIsCreating }) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input name = "description" type="text" value = {form?.description} onChange={handleOnFormFieldChange}/>
         
        </div>
        <div className="field">
          <label>Category</label>
          <input name = "category" type = "text" value = {form?.category} onChange={handleOnFormFieldChange} />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input name = "amounts" type="number" value = {form?.amount} onChange={handleOnFormFieldChange}/>
        </div>

        <button className="add-transaction" onClick={()=>{handleOnSubmit}} type="submit">
          Add
        </button>
      </div>
    </div>
  )
}
