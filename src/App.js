import './App.css';
import React, { useState } from 'react';
import initialCoffeeData from "./assets/json/data.json";
import CoffeeCard from './components/CoffeeCard';
import FilterButtons from './components/FilterButtons';
import Header from './components/Header';

function App() {

  const [coffeeData, setCoffeeData] = useState(initialCoffeeData);
  const [filteredCoffee, setFilteredCoffee] = useState(coffeeData);

  // All products button
  const filterAllCoffee = () => {
    const allCoffee = coffeeData.filter(coffee => coffee.available || !coffee.available);
    setFilteredCoffee(allCoffee);
  };

  // Available Now button
  const filterAvailableCoffee = () => {
    const availableCoffee = coffeeData.filter(coffee => coffee.available);
    setFilteredCoffee(availableCoffee);
  };

  return(
    <section className='hero'>
      <div className='content'>
        <Header/>
        <FilterButtons className="allProductButton"
        filterAllCoffee={filterAllCoffee}
        filterAvailableCoffee={filterAvailableCoffee}
        />
        <CoffeeCard coffee={filteredCoffee} />
      </div>
    </section>
    
    
  );
}
export default App;
