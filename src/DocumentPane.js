import React from 'react';
import './DocumentsPane.css';
import Pdf from './Pdf';

export default function DocumentsPane() {
    const PopulatePages = () => {
        const Len = 50;
        return Array(Len).fill(<Pdf/>);
    }

    return (
        <div className='documents-pane'>
            { PopulatePages() }
        </div>
    )
}