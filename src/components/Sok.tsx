import * as React from 'react';
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
        const response = await fetch('http://hotell.difi.no/api/json/kud/idrettsanlegg?eier='+eier);
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
        <section>
            <form onSubmit={submit} className="createNew">
                <input type="text" name="nokkelord"/>
                <button type="submit">Søk</button>
            </form>
        </section>
    );
};

export default Sok;