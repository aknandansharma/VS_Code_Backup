import React, { useState }  from 'react'
import './App.css'


const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handeSubmit = (e) => {
    e.preventDefault()

    console.log(name);
    console.log(email);
    setName('')
    setEmail('')
  }
 
  return (
    <div className='App'>
      <form onSubmit={handeSubmit}>
          <label>
            Name: 
            <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
             />
          </label>
          <label>
            Email: 
            <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
             />
          </label>
          <br />
          <button  type='submit' >submit</button>
      </form>
    </div>
  )
}

export default App

