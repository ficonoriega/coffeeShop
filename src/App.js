import './App.css';
import React from 'react';
import coffeeData from "./assets/json/data.json";
import CoffeeCard from './components/CoffeeCard';
import AllProduct from './components/AllProducts';
import AvailProducts from './components/AvailProducts';

function App() {

  return(
    <section className='hero'>
      <div className='content'>
        <div className='header'>
          <h1 className="title">Our Collection</h1>
          <p className='description'>Introducing a Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
        <div className='buttons'>
          <AllProduct className="allProductButton"/>
          <AvailProducts className="availProductButton"/>
        </div>
        <ul className='coffeeList'>
          {coffeeData.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </div>
    </section>
    
    
  );
}
export default App;
