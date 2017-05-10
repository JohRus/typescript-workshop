import { idrettsanleggSearchResult } from './models/idrettsanlegg';

export const sok = async function(eier) {
    const response = await fetch(`http://hotell.difi.no/api/json/kud/idrettsanlegg?eier=${eier}`);
    return await response.json();
};