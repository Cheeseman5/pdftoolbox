import React from 'react';
import Pdf from './Pdf';

export default function PdfDocument(props) {
    let pages = props.pages || [];
    let name = pages[0].name || props.name || '';

    const onClick = (event) => {
        props.onClick(event);
    }
    const PageName = () => {
        return name;
    }
    const PageImage = () => {
        return pages[0].image;
    }
    const PageText = () => {
        return `${pages.length} pages`;
    }
    return (
        <div className='pdf-document' id={props.id}>
            <Pdf id={pages[0].id} name={PageName()} image={PageImage()} pageText={PageText()} onClick={onClick} />
        </div>
    );
}