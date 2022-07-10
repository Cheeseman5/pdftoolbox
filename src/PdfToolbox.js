import React from 'react';
import './PdfToolbox.css';
import DocumentsPane from './DocumentPane';
import Toolbar from './Toolbar';
import PagePane from './PagePane';
import Pdf from './Pdf';
import PdfDocument from './PdfDocument';

export default function PdfToolbox() {
    let documents = [];
    let activePages = [];

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
        UpdatePages();
    }

    const PopulateDocuments = () => {
        const count = 10;
        const name = 'testDocName.pdf';
        let docs = Array(0);

        [...Array(count).keys()].map(() => {
            const maxPages = Math.floor(Math.random() * (count - 5 + 1) + 5);
            const pages = GeneratePages(maxPages, name);
            docs.push(
                <PdfDocument name={name} pages={pages} onClick={onClick}/>
            )
        });
        documents = docs;
    }

    const GeneratePages = (count, name) => {
        let pages = [];
        [...Array(count).keys()].map(i => {
            const pageText = `page ${i}`;
            pages.push(<Pdf id={i} name={name} pageText={pageText}/>)
        });
        return pages;
    }

    const UpdatePages = () => {
        const activeDocuments = document.querySelectorAll('.documents-pane .selected');
        console.log(`activeDocuments: ${activeDocuments}`);
        console.log(`activeDocuments?.length: ${activeDocuments?.length}`);
        activePages = [];
        activeDocuments.forEach((val, i, obj) => {
        // for(const doc in activeDocuments) {
            console.log(`doc: ${val.parentNode.pages}`);
            // activePages.push(doc.pages);
        });
        console.log(`activeDocuments: ${activeDocuments}`);
        console.log(`activePages: ${activePages?.length}`);
        // return activePages;
    }

    return (
        <div className='pdftoolbox'>
            { PopulateDocuments() }
            <Toolbar />
            <div className='working-area'>
                <DocumentsPane documents={ documents } onClick={ onClick } />
                <PagePane  activePages={ activePages } onClick={ onClick } />
            </div>
        </div>
    )
}