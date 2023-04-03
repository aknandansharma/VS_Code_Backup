import React from 'react'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import products from './data.json'
import { element } from 'prop-types'


function App() {
  return (
    <div className='App'>
     <Header />
     <div className="main">
      {
        products.map((element) => {
          return (
            <Movie
            title={element.title}
            description={element.description}
            price={element.price}
            thumbnail={element.thumbnail}
          />
          )
        })
      }
        
     </div>
     
    </div>
  )
}

export default App