import {idrettsanleggSearchResult} from "./models/idrettsanlegg";

export const sokIdrettsanlegg = async function(eier: string): Promise<idrettsanleggSearchResult> {
    const response = await fetch(`http://hotell.difi.no/api/json/kud/idrettsanlegg?eier=${eier}`);
    return await response.json();
};
