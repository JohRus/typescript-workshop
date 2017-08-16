import { idrettsanleggSearchResult } from '../models/idrettsanlegg';
import {RestStatus, RestStatusTypes} from "../utils/rest-utils";
import {SokActionKeys, SokActionTypes} from "./actions";

export interface idrettsannleggState {
    data: idrettsanleggSearchResult;
    status: RestStatusTypes
}

const initialState: idrettsannleggState = {
    data: {
        entries: [],
        page: 0,
        pages: 0,
        posts: 0
    },
    status: RestStatus.INITIALISERT
};

export default (state: idrettsannleggState = initialState, action: SokActionTypes) => {
    switch (action.type) {
        case SokActionKeys.SUCCESS:
            return { ...state, data: action.payload, status: RestStatus.SUCCESS };
        case SokActionKeys.PENDING:
            return { ...state, status: RestStatus.PENDING };
        default:
            return state
    }
}
