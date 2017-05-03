import { idrettsanleggSearchResult } from '../models/idrettsanlegg';
import Api from '../api';
import {RestAction} from "../utils/rest-utils";

const SOK_SUCCESS = 'SOK_SUCCESS';
const SOK_PENDING = 'SOK_PENDING';

export enum REST_STATUS {
    INITIALISERT, PENDING, SUCCESS
}

export interface idrettsannleggState {
    data: idrettsanleggSearchResult;
    status: REST_STATUS
}

const initialState: idrettsannleggState = {
    data: {
        entries: [],
        page: 0,
        pages: 0,
        posts: 0
    },
    status: REST_STATUS.INITIALISERT
};

export default (state: idrettsannleggState = initialState, action: RestAction<idrettsanleggSearchResult>) => {
    switch (action.type) {
        case SOK_SUCCESS:
            return { ...state, data: action.payload, status: REST_STATUS.SUCCESS };
        case SOK_PENDING:
            return { ...state, status: REST_STATUS.PENDING };
        default:
            return state
    }
}

export const sok = (eier: string) => {
    Api.sok(eier)
        .then(((res: idrettsanleggSearchResult) => ({
            type: SOK_SUCCESS,
            data: res
        })))
        .catch(err => console.error(err));
};
