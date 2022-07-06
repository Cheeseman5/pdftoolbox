import React from 'react';
import './DocumentsPane.css';
import Pdf from './Pdf';
import PdfDocument from './PdfDocument';

export default function DocumentsPane() {
    let activeDocument;
    let documents = [];

    const toggleSelected = (li) => {
        li.classList.toggle('selected');
    }
    const singleSelect = (pdfCard) => {
        const selected = document.querySelectorAll('.page-pane .selected,.documents-pane .selected');
        
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

    const setActive = (doc) => {
        activeDocument = doc;
        console.log(`document '${doc.name}' now selected`);
    };
    const PopulateDocuments = () => {
        const count = 20;
        const pageCount = 50;
        const name = 'testDocName.pdf';
        let docs = Array(0);

        [...Array(count).keys()].map(i => {
            const pages = GeneratePages(pageCount, name);
            docs.push(
                <PdfDocument pages={pages} onClick={onClick}/>
            )
        });
        documents = docs;
        activeDocument = docs[0];
        return docs;
    }

    const GeneratePages = (count, name) => {
        let pages = [];
        [...Array(count).keys()].map(i => {
            const pageText = `page ${i}`;
            pages.push(<Pdf id={i} name={name} pageText={pageText}/>)
        });
        return pages;
    }

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
            { PopulateDocuments() }
            { documents }
        </div>
    )
}