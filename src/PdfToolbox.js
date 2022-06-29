import React from 'react';
import './PdfToolbox.css';
import DocumentsPane from './DocumentPane';
import Toolbar from './Toolbar';
import PagePane from './PagePane';

export default function PdfToolbox() {
    return (
        <div className='pdftoolbox'>
            <Toolbar />
            <div className='working-area'>
                <DocumentsPane />
                <PagePane />
            </div>
        </div>
    )
}