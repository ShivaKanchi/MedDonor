import axios from 'axios'
import { SIGN_OUT, SIGN_IN, SIGN_UP } from './auth.type'

export const signIn = (data) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/login`, //http://localhost:4000/
            data: { credentials: data }
        })
        localStorage.setItem("Donnor", JSON.stringify({ token: User.data.token }));
        axios.defaults.headers.common["Authorization"] = `Bearer${User.data.token}`;
        return dispatch({ type: SIGN_IN, payload: data })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const signUp = (data) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/user/register`,
            data: { credentials: data }
        })
        localStorage.setItem("Donnor", JSON.stringify({ token: User.data.token }));
        axios.defaults.headers.common["Authorization"] = `Bearer${User.data.token}`;
        return dispatch({ type: SIGN_UP, payload: data })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}