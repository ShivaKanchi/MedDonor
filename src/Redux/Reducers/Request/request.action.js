import axios from "axios";
import { ADD_REQUEST, GET_REQUESTS } from "./request.type"


export const addRequest = (data) => async (dispatch) => {
    try {
        const addedrequest = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/request/new`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { data }
        });
        return dispatch({ type: ADD_REQUEST, payload: addedrequest.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const getRequests = () => async (dispatch) => {
    try {
        const requestlists = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/request`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: GET_REQUESTS, payload: requestlists.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}
