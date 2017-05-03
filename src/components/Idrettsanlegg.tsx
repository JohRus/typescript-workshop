import React from 'react';
import { idrettsanleggViewModel } from '../types/idrettsanlegg';

interface idrettsanleggProps {
    idrettsanlegg: idrettsanleggViewModel[]
}

const Idrettsanlegg = (props: idrettsanleggProps) => {

    const mapIdrettsanlegg = (idrettsanlegg: idrettsanleggViewModel, indeks: number) => (
        <div key={indeks}>
            <span>{idrettsanlegg.eier}</span>
            <span>{idrettsanlegg.anleggsnavn}</span>
            <span>{idrettsanlegg.anleggstype}</span>
        </div>
    );

    return (
        <section>
            <div>{props.idrettsanlegg.length}</div>
            {props.idrettsanlegg.map(mapIdrettsanlegg)}
        </section>
    );
};

export default Idrettsanlegg;