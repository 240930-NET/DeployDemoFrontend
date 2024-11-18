import { useEffect, useState } from 'react'
import Header from './components/Header';
import './App.css'

function App() {
  const [ExpenseList, setExpenses] = useState(null);
  const [UserList, setUserList] = useState(null);

  useEffect(() => {

    fetch("https://vladabudget.azurewebsites.net/api/Expense", {
      method: "GET",
  
    })
    .then(response => response.json())
    .then(data => {
        setExpenses(data);
    })
  },[])

  useEffect(() => {

    fetch("https://vladabudget.azurewebsites.net/api/User", {
      method: "GET",
  
    })
    .then(response => response.json())
    .then(data => {
        setUserList(data);
    })
  },[])


  return (
    <>
      <Header></Header>
      <h1>Welcome to Expense Tracker</h1>

      <section style={{float: "left"}}>
      <h2>List of Users</h2>
      {
        UserList === null ? <h3>There are no users</h3> : (
          UserList.map(user => (
            <div key={user.userId}>
              <h3>{user.userId} {user.firstName} {user.lastName}</h3>
            </div>
          ))
        )
      }
      </section>

      <section style={{float: "right"}}>
      <h2>List of Expenses</h2>
      {
        ExpenseList === null ? <h3>There are no expenses</h3> : (
          ExpenseList.map(expense => (
            <div key={expense.expenseId}>
              <h3>{expense.expenseName}: {expense.expenseDescription}</h3>
              <p>Amount: {expense.expenseAmount}</p>
              <br></br>
            </div>
          ))
        )
      }
      </section>     
    </>
  )
}

export default App
