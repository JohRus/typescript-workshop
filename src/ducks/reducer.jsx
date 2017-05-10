export const SOK_SUCCESS = 'SOK_SUCCESS';
export const SOK_PENDING = 'SOK_PENDING';
export const REST_STATUS = {
    INITIALISERT: "INITIALISERT",
    PENDING: "PENDING",
    SUCCESS: "SUCCESS"
};

const initialState = {
    data: {
        entries: [],
        page: 0,
        pages: 0,
        posts: 0
    },
    status: REST_STATUS.INITIALISERT
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SOK_SUCCESS:
            return { ...state, data: action.payload, status: REST_STATUS.SUCCESS };
        case SOK_PENDING:
            return { ...state, status: REST_STATUS.PENDING };
        default:
            return state;
    }
};

export const lagre = (data) => {
    return {
        type: SOK_SUCCESS,
        payload: data
    };
};
