import React from 'react';
import { connect } from "react-redux";
import { Spinner } from "./Spinner";
import { REST_STATUS } from "../ducks/reducer";

const Idrettsanleggliste = (props) => {
    const mapIdrettsanlegg = (idrettsanlegg, indeks) => (
        <li key={indeks} className="list-group-item row">
            <span className="col-md-4">{idrettsanlegg.eier}</span>
            <span className="col-md-4">{idrettsanlegg.anleggsnavn}</span>
            <span className="col-md-4">{idrettsanlegg.anleggstype}</span>
        </li>
    );

    return (
        <section style={{marginTop: "30px"}}>
            <Spinner laster={props.laster} storrelse="stor">
                <ul className="list-group">
                    { props.idrettsanlegg.length > 0 &&
                        <li key={0} className="list-group-item row">
                            <strong className="col-md-4">Eier</strong>
                            <strong className="col-md-4">Anleggsnavn</strong>
                            <strong className="col-md-4">Anleggstype</strong>
                        </li>
                    }
                    {props.idrettsanlegg.map(mapIdrettsanlegg)}
                </ul>
            </Spinner>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        idrettsanlegg: state.data.entries,
        laster: state.status === REST_STATUS.PENDING
    };
};

export default connect(mapStateToProps)(Idrettsanleggliste);
