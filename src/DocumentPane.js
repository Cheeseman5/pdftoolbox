import React from 'react';
import './DocumentsPane.css';
import Pdf from './Pdf';
import PdfDocument from './PdfDocument';

export default function DocumentsPane(props) {
    let documents = props.documents;

    const onClick = (event) => {
        props.onClick(event);
    }

    return (
        <div className='documents-pane'>
            { documents }
        </div>
    )
}