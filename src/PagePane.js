import React from 'react';
import './PagePane.css';
import Pdf from './Pdf';

export default function PagePane() {
    //let pages;
    const PopulatePages = () => {
        const name = 'test-doc-name.pdf';
        const Len = 100;
        let pages = Array(0);
        
        //console.log(`iterating to ${Array(Len).length}`);
        for(let i=1; i <= Array(Len).length; i++) {
            pages.push(<Pdf id={i} page={i} name={name}/>);
            //console.log(`adding page ${i}`);
        }
        //console.log(pages);
        return pages;
    }
    
    return (
        <div className='page-pane'>
            { PopulatePages() }
        </div>
    )
}