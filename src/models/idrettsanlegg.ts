export interface idrettsanleggApiType {
    eier: string,
    anleggsnavn: string,
    anleggsnummer: string,
    utbetalt: string,
    utm_ost: string,
    ngo_akse: string,
    anleggskategori: string,
    ngo_x: string,
    byggear: string,
    ngo_y: string,
    maltype1: string,
    uu: string,
    driver: string,
    tildelt: string,
    status: string,
    malenhet1: string,
    inndratt: string,
    anleggstype: string,
    maltype4: string,
    malenhet4: string,
    maltype3: string,
    malenhet3: string,
    maltype2: string,
    malenhet2: string,
    ombyggear: string,
    anleggsklasse: string,
    malverdi4: string,
    utm_nord: string,
    malverdi2: string,
    malverdi3: string,
    utm_sone: string,
    malverdi1: string
}

export interface idrettsanleggSearchResult {
    entries: idrettsanleggApiType[],
    page: number,
    pages: number,
    posts: number
}

export interface idrettsanleggViewModel {
    eier: string,
    anleggsnavn: string,
    anleggsnummer: string,
    utbetalt: string,
    anleggskategori: string,
    byggear: string,
    tildelt: string,
    status: string,
    anleggstype: string
}

export const mapEntries = (entry: idrettsanleggApiType): idrettsanleggViewModel => ({
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
