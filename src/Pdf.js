import React from 'react';
import './Pdf.css';

export default function Pdf(props) {
    const image = props.image || 'default.png';
    const id = props.id;
    const name = props.name;
    const pageText = props.pageText;
    
    const onClick = (event) => {
        props.onClick(event);
    }

    return (
        <li key={id} className='pdf pdf-card' onClick={onClick}>
            <img className='card-image' src={image} alt={image}/>
            <div className='card-overlay'>
                <h4 className='card-title'>{ name }</h4>
                <p className='card-text'>{ pageText }</p>
            </div>
        </li>
    );
}