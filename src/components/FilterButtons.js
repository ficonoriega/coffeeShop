import React from 'react';
// import coffeeData from "../assets/json/data.json";

const FilterButtons = ({setItem, availCoffee}) => {

  return (
    <div className='buttonsClass'>
      <button type="button">All Products</button>
      <button type="button">Available Now</button>
    </div>
    
  );
};

export default FilterButtons;