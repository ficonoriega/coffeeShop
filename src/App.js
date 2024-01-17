import './App.css';
import React from 'react';
import jsonData from "./data.json";
import CoffeeCard from './components/CoffeeCard';

function App() {
  return (
    <CoffeeCard data={jsonData}/>
  );
}

export default App;
