import {
    GET_ALL_EVENTS,
    GET_EVENT,
    ADD_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    GET_CITY_EVENTS,
    GET_CERTIFICATE_EVENT,
} from "./event.type";

import axios from 'axios';

export const addEvent = (eventData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/add`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { credentials: eventData }
        });
        return dispatch({ type: ADD_EVENT, payload: eventData });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}