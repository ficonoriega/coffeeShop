import React from "react";
//import Coffees from "../data.json";

const CoffeeCard = ({coffee}) => {

  return (
    <div className="link-card" key={coffee.id}>
      {
        coffee.image && 
        <div>
          <figure>
            <p className="popular">{coffee.popular ? 'Popular' : 'Unpopular'}</p>
            <img src= {coffee.image} alt={coffee.name}></img>
          </figure>
          <div>
            <h3>{coffee.name}</h3>
            <p>{coffee.price}</p>
          </div>
          <div>
            <p>{coffee.rating} ({coffee.votes} votes)</p>
            <p>{coffee.available ? 'Available' : 'Sold out'}</p>
          </div>
        </div>
      }   
    </div>
  );

    // <div>
    //   {
    //     Coffees && Coffees.map(coffee => {
    //       return(
    //         <div key = {coffee.id}>
    //           {coffee.name} <br/>
    //           {/* {coffee.image} */}
    //           {coffee.price} <br/>
    //           {coffee.rating} <br/>
    //           {coffee.votes} <br/>
    //           {coffee.popular} <br/>
    //           {coffee.available}
    //         </div>
    //       )
    //     })
    //   }
    // </div>
    // const { name, image, price, rating, votes, popular, available } = props;
    // const { name, image } = props;
    // Coffees.map(coffee => {
    //     return(
    //         <div>
    //             {coffee.name}
    //         </div>
    //     )
    // } )
}

export default CoffeeCard;