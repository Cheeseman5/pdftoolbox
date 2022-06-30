import React from 'react';
import './Pdf.css';

export default function Pdf({ id, pageText, name='bob' }) {
    return (
        <div className='Pdf' key={id}>
            <img className='card-image' src='default.png'/>
            <div className='card-overlay'>
                <h4 className='card-title'>{ name }</h4>
                <p className='card-text'>{ pageText }</p>
            </div>
        </div>
    );
}