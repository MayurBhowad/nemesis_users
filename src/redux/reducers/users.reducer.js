import { EDIT_USER, GET_ALL_USERS, ADD_NEW_USER, USER_LOADING, DELETE_USER } from "../types.redux";

const initialState = {
    loading: false,
    user: null,
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.id ? el = action.payload : el),
                loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(el => el.id !== action.payload),
                loading: false
            }
        default:
            return state;
    }
}