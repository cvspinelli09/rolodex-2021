import React from 'react';

import './card.styles.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <image alt='something' src={`https://robohash.org/${props.produto.id}?set=set2&size=180x180`} />
            <h1 >{ props.produto.name}</h1>
            <p>{props.produto.email} </p>
        </div>
    )
};

export default Card;