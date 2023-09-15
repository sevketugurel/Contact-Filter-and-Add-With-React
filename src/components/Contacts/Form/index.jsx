import {useState} from 'react'

const initialFormValues = {fullname:"", phone_number:""}

function Form({addContact, contacts}) {
  const [form,setForm] =useState(initialFormValues)

  const onChangeInput = (e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  const onSubmit = (e) =>{
    e.preventDefault() // sayfa yenilendiğinde logu görebeilmek için
    // boş olduğunda ekleyemiyoruz
    if (form.fullname === "" || form.phone_number === "") {
      return false
    }

    addContact([...contacts,form]) // Verileri koruyup üstüne ekleme yapabilmek için
    
    // EKledikten sonra inputları boşaltmak için
    setForm(initialFormValues)
  }
  return (
    <form onSubmit={onSubmit} >
      <div >
          <input 
          name='fullname'
          placeholder='Full Name' 
          value={form.fullname}
          onChange={onChangeInput}
          />
           
      </div>

      <div >
          <input 
          name='phone_number' 
          placeholder='Phone Number'
          value={form.phone_number}
          onChange={onChangeInput} />
      </div>
      <div className='btn'>
        <button >Add</button>
      </div>
    </form>
  )
}

export default Form