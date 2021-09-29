import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {

    

    return (
        
         <li className="cards__item">
             <Link underline='none'
             className="cards__item__link" 
             to={props.path} 
             rel="noreferrer"
             target="_blank"
             >
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="Pic"
                    className="cards__item__img"/>
              </figure>
                <div className="cards__item__info">
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href={props.href}
                    className="cards__item__text">{props.text}</a>
                    <p>{props.p}</p>
                </div>
               
             </Link>
         </li>
       
    )
}

export default CardItem
