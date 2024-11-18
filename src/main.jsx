import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseForm from './components/ExpenseForm.jsx'
import {  // import router functions
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './components/UserForm.jsx'
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addExpense",
    element: <ExpenseForm />,
  },
  {
    path: "/addUser",
    element: <UserForm />
  }  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider  router = {router}>
    <Header />
  </RouterProvider>

)
