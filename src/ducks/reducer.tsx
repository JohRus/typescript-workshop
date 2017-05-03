import { idrettsanleggSearchResult } from '../types/idrettsanlegg';
import * as Api from '../api';

const SOK_SUCCESS = 'SOK_SUCCESS';
const SOK_PENDING = 'SOK_PENDING';

const initialState: idrettsanleggSearchResult = {
    entries: [],
    page: 0,
    pages: 0,
    posts: 0
};

export default (state: idrettsanleggSearchResult = initialState, action: any) => {
    switch (action.type) {
        case SOK_SUCCESS:
            return { ...action.data };
        case SOK_PENDING:

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
