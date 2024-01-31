import './App.css';
import React, { useState, useEffect } from 'react';
// import initialCoffeeData from "./assets/json/data.json";
import CoffeeCard from './components/CoffeeCard';
import FilterButtons from './components/FilterButtons';
import Header from './components/Header';

function App() {

  // const [coffeeData, setCoffeeData] = useState(initialCoffeeData);
  // const [filteredCoffee, setFilteredCoffee] = useState(coffeeData);
  
  const [coffeeData, setCoffeeData] = useState([]); //this has empty [] since the value is an array already. I.E. initialCoffeeData and coffeeData are arrays.
  const [filteredCoffee, setFilteredCoffee] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []); // Run only once after initial render

  function fetchingData() {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        setCoffeeData(data); // Update coffeeData state
        setFilteredCoffee(data); // Also update filteredCoffee state
      })
      .catch(error => console.log(error));
  };

  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");
  
  // All products button
  const filterAllCoffee = () => {
    const allCoffee = coffeeData.filter(coffee => coffee.available || !coffee.available);
    setFilteredCoffee(allCoffee);
    btn1.classList.add("clicked");
    btn2.classList.remove("clicked")
  };

  // Available Now button
  const filterAvailableCoffee = () => {
    const availableCoffee = coffeeData.filter(coffee => coffee.available);
    setFilteredCoffee(availableCoffee);
    btn2.classList.add("clicked");
    btn1.classList.remove("clicked")
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
