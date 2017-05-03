import React from 'react';
import { idrettsanleggViewModel } from '../types/idrettsanlegg';

interface idrettsanleggProps {
    idrettsanlegg: idrettsanleggViewModel[]
}

const Idrettsanlegg = (props: idrettsanleggProps) => {

    const mapIdrettsanlegg = (idrettsanlegg: idrettsanleggViewModel, indeks: number) => (
        <li key={indeks} className="list-group-item row">
            <span className="col-md-4">{idrettsanlegg.eier}</span>
            <span className="col-md-4">{idrettsanlegg.anleggsnavn}</span>
            <span className="col-md-4">{idrettsanlegg.anleggstype}</span>
        </li>
    );
    return (
        <section style={{marginTop:"5px"}}>
            <ul className="list-group">
                {props.idrettsanlegg.map(mapIdrettsanlegg)}
            </ul>
        </section>
    );
};

export default Idrettsanlegg;