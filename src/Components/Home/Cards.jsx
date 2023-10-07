// 'use client';
import { Link } from "react-router-dom";
import "./Cards.css"
// import { Card } from 'flowbite-react';

const Cards = ({card}) => {

const {id, image, picture, price, title, shortDescription} = card || {}

    return (
        <div>
{/* try my own style cards
 */}
<div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <p>
          <span>Price: {price} $</span>
        </p>
        <Link to={`/servicedetailes/${id}`}><button>See Details</button></Link>
      </div>
    </div>


        </div>
    );
};

export default Cards;