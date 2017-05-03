import React from 'react';
import { idrettsanleggViewModel } from '../models/idrettsanlegg';
import {connect} from "react-redux";
import {idrettsannleggState} from "../ducks/reducer";

interface idrettsanleggProps {
    idrettsanlegg: idrettsanleggViewModel[]
}

const Idrettsanleggliste = (props: idrettsanleggProps) => {

    const mapIdrettsanlegg = (idrettsanlegg: idrettsanleggViewModel, indeks: number) => (
        <li key={indeks} className="list-group-item row">
            <span className="col-md-4">{idrettsanlegg.eier}</span>
            <span className="col-md-4">{idrettsanlegg.anleggsnavn}</span>
            <span className="col-md-4">{idrettsanlegg.anleggstype}</span>
        </li>
    );
    return (
        <section style={{marginTop:"30px"}}>
            <ul className="list-group">
                { props.idrettsanlegg.length > 0 ?
                    <li key={0} className="list-group-item row">
                            <strong className="col-md-4">Eier</strong>
                            <strong className="col-md-4">Anleggsnavn</strong>
                            <strong className="col-md-4">Anleggstype</strong>
                    </li>
                    :null
                }
                {props.idrettsanlegg.map(mapIdrettsanlegg)}
            </ul>
        </section>
    );
};

const mapStateToProps = (state: idrettsannleggState) => {
    return {
        idrettsanlegg: state.data.entries
    };
};

export default connect(mapStateToProps)(Idrettsanleggliste);
