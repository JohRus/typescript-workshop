import React from 'react';
import {FormEvent} from "react";
import {connect} from 'react-redux';
import {sok} from '../ducks/reducer';

interface sokProps {
    doSok: (eier: string) => any
}

interface SearchForm extends HTMLFormElement {
    nokkelord: HTMLInputElement;
}

const Sok = (props: sokProps) => {

    const submit = (event: FormEvent<SearchForm>): void => {
        event.preventDefault();
        props.doSok(event.currentTarget.nokkelord.value);
    };

    return (
        <section className="container">
            <form onSubmit={submit} className="createNew">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="submit">Søk</button>
                            </span>
                            <input type="text" name="nokkelord" className="form-control" placeholder="Søk etter eier av idrettsannlegg"/>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        doSok: (eier: string) => dispatch(sok(eier))
    }
};

export default connect(() => ({}), mapDispatchToProps)(Sok);
