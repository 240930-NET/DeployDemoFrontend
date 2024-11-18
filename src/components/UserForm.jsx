import { useEffect, useState } from 'react';
import Header from './Header';
const UserForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:""
    });

    const [message, setMessage] = useState(null);

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const addNewUser = (e) => {
        e.preventDefault();
        if(formData.firstName != '' && formData.lastName != ''){

            console.log(formData);
            
            fetch("https://vladabudget.azurewebsites.net/api/User/AddNewUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            
              })
              .then(response => response.json())
              .then(data => {
                if(data.firstName != null){
                    setMessage(`${data.firstName} ${data.lastName} was added !`)
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
        <h1>Add New User</h1>
        <section style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
            <form onSubmit={addNewUser}>
                {message && <div>{message}</div>}
                <label htmlFor="user">First Name:</label>
                <input type="text" id="user" name="firstName" required onChange={handleInputChange}/>

                <label htmlFor="user">Last Name:</label>
                <input type="text" id="user" name="lastName" onChange={handleInputChange} required/>

                <input type="submit" value="Add User"/>

            </form>
        </section>
        </>
    )
}

export default UserForm;