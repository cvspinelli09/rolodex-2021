import React from 'react';

import './card-list.styles.css';

import Card from '../card/card.component'

const CardList = props => {
    return (
        <div className='card-list' >
            {props.produtos.map(produto => (
                    <Card key={produto.id} produto={produto} />
                ))
            }
        </div>
    )
};

export default CardList;