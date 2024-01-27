import coffeeData from "../assets/json/data.json";

function getCoffees() {
  const coffeeList = coffeeData;
  return coffeeList;
}

function filterCoffee(availabilityCoffee) {
  let filteredCoffee = getCoffees().filter(availability => availability.available === availabilityCoffee);
  return filteredCoffee;
}

export {filterCoffee, getCoffees}