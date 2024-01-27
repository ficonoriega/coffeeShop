import './App.css';
import React, { useState } from 'react';
import coffeeData from "./assets/json/data.json";
import CoffeeCard from './components/CoffeeCard';
import FilterButtons from './components/FilterButtons';

function App() {

  const [item, setItem] = useState(coffeeData);

  return(
    <section className='hero'>
      <div className='content'>
        <div className='header'>
          <h1 className="title">Our Collection</h1>
          <p className='description'>Introducing a Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
        <FilterButtons className="allProductButton"/>
        <CoffeeCard coffee={item} />
      </div>
    </section>
    
    
  );
}
export default App;
