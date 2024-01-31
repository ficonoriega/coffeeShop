import React from 'react';

const FilterButtons = ({ filterAllCoffee, filterAvailableCoffee }) => {
  return (
    <div className='buttonsClass'>
      <button id="btn1" type="button" className ="clicked" onClick={filterAllCoffee}>All Products</button>
      <button id="btn2" type="button" onClick={filterAvailableCoffee}>Available Now</button>
    </div>
  );
};

export default FilterButtons;