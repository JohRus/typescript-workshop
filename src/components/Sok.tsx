import React from 'react';
import { idrettsanleggApiType, idrettsanleggViewModel, idrettsanleggSearchResult } from '../types/idrettsanlegg';
import {FormEvent} from "react";

interface sokProps {
    lagre: (idrettsanlegg: idrettsanleggViewModel[]) => any
}

interface SearchForm extends HTMLFormElement {
    nokkelord: HTMLInputElement;
}

const Sok = (props: sokProps) => {
    const sok = async function(eier: string): Promise<idrettsanleggSearchResult> {
        const response = await fetch(`http://hotell.difi.no/api/json/kud/idrettsanlegg?eier=${eier}`);
        return await response.json();
    };

    const mapEntries = (entry: idrettsanleggApiType): idrettsanleggViewModel => ({
        eier: entry.eier,
        anleggsnavn: entry.anleggsnavn,
        anleggsnummer: entry.anleggsnummer,
        utbetalt: entry.utbetalt,
        anleggskategori: entry.anleggskategori,
        byggear: entry.byggear,
        tildelt: entry.tildelt,
        status: entry.status,
        anleggstype: entry.anleggstype
    });

    const submit = (event: FormEvent<SearchForm>): void => {
        event.preventDefault();
        sok(event.currentTarget.nokkelord.value)
            .then((res: idrettsanleggSearchResult) => props.lagre(res.entries.map(mapEntries)));
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

export default Sok;