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

      <AddTransactionForm />
      <AddTransactionForm form={form} setIsCreating = {setIsCreating} handleOnFormFieldChange = {handleOnFormFieldChange}/>
    </div>
  )
}

export function AddTransactionForm() {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input />
        </div>
        <div className="field">
          <label>Category</label>
          <input />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input />
        </div>

        <button className="btn add-transaction" type="submit">
          Add
        </button>
      </div>
    </div>
  )
}
