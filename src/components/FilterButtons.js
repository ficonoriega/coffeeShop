import React from 'react';

const FilterButtons = ({ filterAllCoffee, filterAvailableCoffee }) => {
  return (
    <div className='buttonsClass'>
      <button type="button" onClick={filterAllCoffee}>All Products</button>
      <button type="button" onClick={filterAvailableCoffee}>Available Now</button>
    </div>
  );
};

export default FilterButtons;