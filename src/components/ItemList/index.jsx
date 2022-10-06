import Item from '../Item';
import React from 'react';

const ItemList = ({data= []}) => {
    return (
        data.map(curso => <Item key={curso.id} info={curso} />)
    );
}

export default ItemList;