import { Link } from "react-router-dom"
const Header = () => {

    return (
        <header>
            <ul className="no-bullets">
                <li style={{ marginRight: '400px'}}>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/addUser">Add User</Link>
                </li>
                <li>
                    <Link to="/addExpense">Add Expense</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;