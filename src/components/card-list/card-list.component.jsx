import React from 'react';

import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = props => {
    console.log('CardList props:');
    console.log(props);

    return <div className='card-list'>
    { 
        props.users.map(user => (
            <Card key={user.id}>{user}</Card>
        ))        
    } 
    </div>;
}