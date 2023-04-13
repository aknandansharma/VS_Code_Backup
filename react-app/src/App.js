import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header'

const App = () => {
  const [state, setState] = useState(0 )

  useEffect(() => {
     window.alert ("Use Effect Called ");
  })

  console.log('Function Body');

  return (
    <div className='App'>
      <Header/> 
      <button onClick={() => setState(state 
        +1)}>Click Me {state} </button>
    </div>
  )
}
// start the use effect
export default App