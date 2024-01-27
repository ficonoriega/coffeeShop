import React from 'react';
import coffeeData from "../assets/json/data.json";

const FilterButtons = ({setCoffee}) => {

  const availCoffee = [...new Set(coffeeData.map((coffee) => coffee.available))];

  return (
    <div className='buttonsClass'>
      <button type="button">All Products</button>
      <button type="button">Available Now</button>
    </div>
    
  );
};

export default FilterButtons;