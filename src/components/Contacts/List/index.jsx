import { useState } from 'react'
import Contacts from '..'

function List({ contacts }) {
    const [filterText,setFilterText] = useState("")

    // burada filtereleme işlemi yaptık Ohject.keys özel bir durum
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())    
        )
    })

    // kontrol ettik
    //console.log(filtered)

    return (
        <div>
            <input 
            placeholder="Filter Contact"
            value={filterText}
            onChange = {(e) => setFilterText(e.target.value)}
            />
            <ul className='list'>
                {filtered.map((contact, i) =>(
                <li key={i}>
                    <span>{contact.fullname}</span>
                    <span>{contact.phone_number}</span>
                </li>))}
            </ul>

            <p>Total Contacts ({filtered.length})</p>
        </div>
    )
}

export default List