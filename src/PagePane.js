import React from 'react';
import './PagePane.css';
import Pdf from './Pdf';

export default function PagePane() {
    
    const toggleSelected = (li) => {
        li.classList.toggle('selected');
    }
    const singleSelect = (pdfCard) => {
        const selected = document.querySelectorAll('.page-pane .selected');
        // let selected = ul.querySelectorAll('.selected');
        for(let elem of selected) {
            elem.classList.remove('selected');
        }
        pdfCard.classList.add('selected');
    }
    const onClick = (event) => {
        if(event.currentTarget.tagName !== 'LI') return;

        if(event.ctrlKey || event.metaKey){
            toggleSelected(event.currentTarget);
        } else {
            singleSelect(event.currentTarget);
        }
    }
    const PopulatePages = () => {
        const name = 'test-doc-name.pdf';
        const Len = 100;
        let pages = Array(0);
        
        for(let i=1; i <= Array(Len).length; i++) {
            pages.push(
                    <Pdf id={i} pageText={`page ${i}`} name={name} onClick={onClick}/>
                );
            }
            return pages;
        }
        
        return (
        <div className='page-pane'>
            <ul>
                { PopulatePages() }
            </ul>
        </div>
    )
}