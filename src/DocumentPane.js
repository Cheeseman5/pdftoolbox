import React from 'react';
import './DocumentsPane.css';
import Pdf from './Pdf';

export default function DocumentsPane() {
    const PopulatePages = () => {
        const name = 'test-doc-name.pdf';
        const Len = 20;
        let pages = Array(0);
        
        for(let i=1; i <= Array(Len).length; i++) {
            pages.push(
                <ul key={i}>
                    <Pdf id={i} pageText={`${i} pages`} name={name}/>
                </ul>
            );
        }
        return pages;
    }

    return (
        <div className='documents-pane'>
            { PopulatePages() }
        </div>
    )
}