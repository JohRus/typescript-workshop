import {idrettsanleggSearchResult} from "../models/idrettsanlegg";

export enum SokActionKeys {
    PENDING  = "SOK/PENDING",
    SUCCESS = "SOK/SUCCESS"
}

export interface SokSuccessAction {
    type: SokActionKeys.SUCCESS,
    payload: idrettsanleggSearchResult
}

export interface SokAction {
    type: SokActionKeys.PENDING,
}

export type SokActionTypes =
    | SokAction
    | SokSuccessAction;


export function lagreIdrettsanlegg(data: idrettsanleggSearchResult): SokSuccessAction {
    return {
        type: SokActionKeys.SUCCESS,
        payload: data
    };
}


