import { GET_USER, SELF, CLEAR_USER, UPDATE_USER } from "./user.type";
import axios from "axios";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/one/${_id})`
        })
        return dispatch({ type: GET_USER, payload: User.data });

    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/`
        })
        return dispatch({ type: SELF, payload: { ...User.data.user } });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} });

    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const updateUser = (_id) => async (dispatch) => {
    try {

        const User = await axios({
            method: "PUT",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/update`
        })
        return dispatch({ type: UPDATE_USER, payload: User });

    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}