import './item.css'
import { Link } from 'react-router-dom';
import React from 'react';


const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className = "curso">
            <img src={info.image} alt="" />
            <p>{info.titulo}</p>
        </Link>
    );
}

export default Item;