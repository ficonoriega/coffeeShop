import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const CoffeeCard = ({coffee}) => {

  return(
    <ul className='coffeeList'>
      {coffee.map((Val) =>{
        return (
          <li className="link-card" key={Val.id}>
            {
              Val.image && 
              <div className="card">
                { Val.popular ?(
                  <figure>
                    <p className="popular">{Val.popular ? 'Popular' : ''}</p>
                    <img src= {Val.image} alt={Val.name}></img>
                  </figure>
                ) : (
                  <figure>
                    <img src= {Val.image} alt={Val.name}></img>
                  </figure>
                )
                }
                <div className="section1">
                  <h3>{Val.name}</h3>
                  <p>{Val.price}</p>
                </div>
                <div className="section2">
                  {Val.rating === null ? (
                    <p> <FaRegStar color="grey" fontSize={24} style={{ marginRight: '8px' }}/> <span className="ratingDetails">No ratings</span></p>
                      ) : (
                    <p>
                      <FaStar color="#F5C769" fontSize={24} style={{ marginRight: '8px' }}/>
                      {Val.rating} {Val.votes && <spam className="ratingDetails">({Val.votes} votes) </spam>}
                    </p>
                  )}
                    <p>{Val.available ? '' : 'Sold out'}</p>
                </div>
              </div>
            }   
          </li>
        );
      })}
    </ul>
  )
}

export default CoffeeCard;