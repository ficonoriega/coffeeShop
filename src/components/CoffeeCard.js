import React from "react";
import { FaStar } from "react-icons/fa6";
//import Coffees from "../data.json";

const CoffeeCard = ({coffee}) => {

  return (
    <li className="link-card" key={coffee.id}>
      {
        coffee.image && 
        <div className="card">
          { coffee.popular ?(
            <figure>
              <p className="popular">{coffee.popular ? 'Popular' : ''}</p>
              <img src= {coffee.image} alt={coffee.name}></img>
            </figure>
          ) : (
            <figure>
              <img src= {coffee.image} alt={coffee.name}></img>
            </figure>
          )
          }
          <div className="section1">
            <h3>{coffee.name}</h3>
            <p>{coffee.price}</p>
          </div>
          <div className="section2">
            {coffee.rating === 0 ? (
              <p> <FaStar /> No Rating</p>
            ) : (
              <p>
                <FaStar color="yellow" fontSize={24} style={{ marginRight: '8px' }}/> {coffee.rating} {coffee.votes && `(${coffee.votes} votes)`}
              </p>
            )}
              <p>{coffee.available ? '' : 'Sold out'}</p>
          </div>
          {/* <table>
            <tr className="section1">
              <td><h3>{coffee.name}</h3></td>
              <td>{coffee.price}</td>
            </tr>
            <tr className="section2">
            {coffee.rating === 0 ? (
            <td> <FaStar /> No Rating</td>
          ) : (
            <td>
              <FaStar color="yellow"/> {coffee.rating} {coffee.votes && `(${coffee.votes} votes)`}
            </td>
          )}
            <td>{coffee.available ? '' : 'Sold out'}</td>
            </tr>
          </table> */}
        </div>
      }   
    </li>
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