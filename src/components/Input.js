import React, {useState} from 'react'

function Input() {
  const [form, setForm] = useState({name : '', surname: '', age:0})

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <label htmlFor="name">
        Name : 
      <input name="name" value={form.name} onChange={onChangeInput} />
      </label><br />
      <label htmlFor="surname">
        Surname : 
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      </label><br />
      <label htmlFor="age">
        Age : 
      <input name="age" value={form.age} onChange={onChangeInput} />
      </label><br />

      <h1>{form.name} {form.surname} is {form.age} years old.</h1>
    </div>
  )
}

export default Input
