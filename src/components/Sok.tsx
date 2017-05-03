import React from 'react';
import {FormEvent} from "react";
import {connect, Dispatch} from 'react-redux';
import {lagre} from '../ducks/reducer';
import * as Api from '../api';
import {idrettsanleggSearchResult} from "../models/idrettsanlegg";
import {RestAction} from "../utils/rest-utils";

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

const mapDispatchToProps = (dispatch: Dispatch<RestAction<idrettsanleggSearchResult>>) => {
    return {
        doSok: (eier: string) => {
            Api.sok(eier)
                .then(((res: idrettsanleggSearchResult) => dispatch(lagre(res))))
                .catch(err => console.error(err));

        }
    }
};

export default connect(() => ({}), mapDispatchToProps)(Sok);
