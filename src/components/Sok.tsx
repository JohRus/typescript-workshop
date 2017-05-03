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
        <section>
            <form onSubmit={submit} className="createNew">
                <input type="text" name="nokkelord"/>
                <button type="submit">Søk</button>
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
