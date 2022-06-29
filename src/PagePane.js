import React from 'react';
import './PagePane.css';
import Pdf from './Pdf';

export default function PagePane() {
    const PopulatePages = () => {
        const Len = 100;
        return Array(Len).fill(<Pdf/>);
    }
    
    return (
        <div className='page-pane'>
            { PopulatePages() }
        </div>
    )
}