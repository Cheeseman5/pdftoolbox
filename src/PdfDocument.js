import React from 'react';
import Pdf from './Pdf';

export default function PdfDocument(props) {
    
    let pages = props.pages || [];
    const onClick = (event) => {
        props.onClick(event);
    }
    const PageName = () => {
        return pages[0].name;
    }
    const PageImage = () => {
        return pages[0].image;
    }
    const PageText = () => {
        return `${pages.length} pages`;
    }
    return (
        <div className='pdf-document'>
            <Pdf id={pages[0].id} name={PageName()} image={PageImage()} pageText={PageText()} onClick={onClick} />
        </div>
    );
}