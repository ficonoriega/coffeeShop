import React from "react";

const CoffeeCard = (props) => {
    // const { name, image, price, rating, votes, popular, available } = props;
    const { name, image } = props;

    return (
        <div>
            <h1>{name}</h1>
            <p>{image}</p>
        </div>
    )
}

export default CoffeeCard;