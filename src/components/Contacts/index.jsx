import {useState,useEffect} from 'react'
import List from './List';
import Form from './Form';
import "./styles.css"

function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname:"Mehmet",
            phone_number:"0533 217 3727"
        },
        {
            fullname:"Salih",
            phone_number:"0537 309 4172"
        },
        {
            fullname:"kemal",
            phone_number:"0541 527 3328"
        },
    ]);

    // Her Contacts değiştiğinde logluyoruz
    useEffect(() => {
        console.log(contacts)
    },[contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact = {setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;