import React from 'react'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import products from './data.json'
import { element } from 'prop-types'


function App() {

    let login = true;
   

  return (
    <div className="App">
      {login === true ? <Header /> : <h1>Dekh le</h1>}

      

      {/* <Header /> */}
      <div className="main">
        {products.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.title}
              description={element.description}
              price={element.price}
              thumbnail={element.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}
// 3:28

export default App