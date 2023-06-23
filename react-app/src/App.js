import './App.css'
import useCounter from './useCounter'


const App = () => {
  const { count, increment, decrement } = useCounter(1);
  return (
    <div className='App'>
       <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App

