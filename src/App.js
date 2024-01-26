import './App.css';
import React from 'react';
import coffeeData from "./assets/json/data.json";
import CoffeeCard from './components/CoffeeCard';
import BackgroundCoffee from './assets/images/bg-cafe.jpg'

function App() {

  return(
    <section className='hero'>
      <div className='content'>
        <h2 className="title">Our Collection</h2>
        <p className='description'>Introducing a Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
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
