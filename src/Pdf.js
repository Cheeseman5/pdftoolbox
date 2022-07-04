import React from 'react';
import './Pdf.css';

export default function Pdf(props) {
    return (
        <div key={props.id} className='pdf pdf-card'>
            <img className='card-image' src='default.png'/>
            <div className='card-overlay'>
                <h4 className='card-title'>{ props.name }</h4>
                <p className='card-text'>{ props.pageText }</p>
            </div>
        </div>
    );
}