import React, {useState} from 'react'
import './App.css'



function App() {

  const [count, setCount] = useState(1)

  const inc = () => {
    if(count > 0){
      setCount(count + 1);
    }
  }

  const dec = () => {
      if (count > 1) {
        setCount(count - 1);
      }
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inc} >increment</button>
      <button onClick={dec} >decrement</button>
    </div>
  );
}

// 4:4
export default App