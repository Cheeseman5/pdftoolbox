import React from 'react';
import './DocumentsPane.css';
import Pdf from './Pdf';
import PdfDocument from './PdfDocument';

export default function DocumentsPane() {
    let activeDocument;
    let documents = [];

    const PopulateDocuments = () => {
        const count = 20;
        const pageCount = 50;
        const name = 'testDocName.pdf';
        let docs = Array(0);

        [...Array(count).keys()].map(i => {
            const pages = GeneratePages(pageCount, name);
            docs.push(
                <PdfDocument pages={pages}/>
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
        console.log(`${name}: ${pages.length}`);
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