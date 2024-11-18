import { useEffect, useState } from 'react';
import Header from './Header';
const ExpenseForm = () => {

    const [formData, setFormData] = useState({
        expenseName:"",
        expenseDescription:"",
        expenseAmount:0,
        userId: 0
    });

    const [message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const addNewExpense = (e) => {
        e.preventDefault();

        if(formData.expenseName != '' && formData.expenseAmount > 0){

            console.log(formData);
            
            fetch("https://vladabudget.azurewebsites.net/api/Expense", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            
              })
              .then(response => response.json())
              .then(data => {
                if(data.expenseName != null){
                    setMessage(data.expenseName + " was added!")
                }
                else{
                    setMessage("Something went wrong")
                }
              })
              .catch(err => setMessage("Something went wrong"));
        }
    }

    return(
        <>
        <Header />
        <h1>Add New Expense</h1>
        <section style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
            <form onSubmit={addNewExpense}>
                {message && <div>{message}</div>}

                <label htmlFor="expense">Expense Name:</label>
                <input type="text" id="expense" name="expenseName" required onChange={handleInputChange}/>

                <label htmlFor="expense">Expense Amount:</label>
                <input type="text" id="expense" name="expenseAmount" onChange={handleInputChange} required/>

                <label htmlFor="expense">Expense Description:</label>
                <input type="text" id="expense" name="expenseDescription" onChange={handleInputChange} required/>

                <label htmlFor="expense">User ID:</label>
                <input type="text" id="expense" name="userId" onChange={handleInputChange} required/>

                <input type="submit" value="Add Expense"/>

            </form>
        </section>
        </>
    )
}

export default ExpenseForm;