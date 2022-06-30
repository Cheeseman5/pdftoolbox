import React from 'react';
import './PagePane.css';
import Pdf from './Pdf';

export default function PagePane() {
    const PopulatePages = () => {
        const name = 'test-doc-name.pdf';
        const Len = 100;
        let pages = Array(0);
        
        for(let i=1; i <= Array(Len).length; i++) {
            pages.push(<Pdf id={i} pageText={`page ${i}`} name={name}/>);
        }
        return pages;
    }
    
    return (
        <div className='page-pane'>
            { PopulatePages() }
        </div>
    )
}