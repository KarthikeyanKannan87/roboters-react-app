import React from 'react'

import './card.styles.css'

export const Card = props => {
    //console.log('Card Props: ');
    //console.log(props);

    return <div className='card-container'>
    {
        <div>
            <img alt="user" src={`https://robohash.org/${props.children.id}?set=set3&size=180x180`}/>
            <h2> {props.children.name} </h2>
            <p> {props.children.email} </p>
        </div>
    }
    </div>
}