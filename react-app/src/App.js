import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]) 

  async function getData() {
    const get = await fetch(
      `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
    );
     const res = await get.json()
     setData(res) 
     document.title = (`${state} emp`) // show live count the data
     console.log(res); 
  }

  useEffect(() => {
    getData()
    
  }, [state]); 


  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state + 3)}>Click Me {state} </button>
      {data.map((e, index) => {
        return (
          <div key={index}>
          <h4>{e.firstName}</h4>
          <h4>{e.lastName}</h4>
          <h4>{e.email}</h4>

        </div>
        )
      })}
    </div>
  );
};
// start the use effect
export default App;
