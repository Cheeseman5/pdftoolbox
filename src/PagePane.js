import React from 'react';
import './PagePane.css';
import Pdf from './Pdf';

export default function PagePane(props) {
    
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
        
    return (
        <div className='page-pane'>
            <ul>
                { props.activePages }
            </ul>
        </div>
    )
}