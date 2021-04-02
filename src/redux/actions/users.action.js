import axios from "axios";
import { ADD_NEW_USER, DELETE_USER, EDIT_USER, GET_ALL_USERS, LOADING, USER_LOADING } from "../types.redux"

export const getAllUsers = () => dispatch => {
    dispatch({ type: USER_LOADING });
    console.log('reach getAllUsers');
    let data = [];
    axios.get('http://jsonplaceholder.typicode.com/users')
        .then(ress => {
            ress.data.map(item => {
                let newUser = {};
                function createData(id, name, username, email, phone, website) {
                    return { id, name, username, email, phone, website }
                }
                data.push(createData(item.id, item.name, item.username, item.email, item.phone, item.website));
            })
            dispatch({ type: GET_ALL_USERS, payload: data })
        })
    return data;
}

export const addNewUser = (data) => dispatch => {
    dispatch({ type: ADD_NEW_USER, payload: data });
}

export const editUser = (data) => dispatch => {
    dispatch({ type: EDIT_USER, payload: data })
}

export const deleteUserById = (id) => dispatch => {
    dispatch({ type: DELETE_USER, payload: id })
}