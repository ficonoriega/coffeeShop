import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

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
            {coffee.rating === null ? (
              <p> <FaRegStar color="grey" fontSize={24} style={{ marginRight: '8px' }}/> <span className="ratingDetails">No ratings</span></p>
                ) : (
              <p>
                <FaStar color="yellow" fontSize={24} style={{ marginRight: '8px' }}/>
                {coffee.rating} {coffee.votes && <spam className="ratingDetails">({coffee.votes} votes) </spam>}
              </p>
            )}
              <p>{coffee.available ? '' : 'Sold out'}</p>
          </div>
        </div>
      }   
    </li>
  );
}

export default CoffeeCard;