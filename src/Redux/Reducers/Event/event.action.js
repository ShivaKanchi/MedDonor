import axios from 'axios';
import {
    GET_ALL_EVENTS,
    GET_EVENT,
    ADD_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    GET_CITY_EVENTS,
    GET_CERTIFICATE_EVENT,
} from "./event.type";


export const getAllEvents = () => async (dispatch) => {
    try {
        const events = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/`, //http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        console.log("Events action", events.data.data)
        return dispatch({ type: GET_ALL_EVENTS, payload: events.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}
export const getEvent = (_id) => async (dispatch) => {
    try {
        const events = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: GET_EVENT, payload: events.data.message });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}
export const addEvent = (data) => async (dispatch) => {
    try {
        const addedEvent = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/new`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { data }
        });
        return dispatch({ type: ADD_EVENT, payload: addedEvent.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const updateEvent = (eventData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/update`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
            data: { credentials: eventData }
        });
        return dispatch({ type: UPDATE_EVENT, payload: eventData });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const deleteEvent = (_id) => async (dispatch) => {
    try {
        const events = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: DELETE_EVENT, payload: events.data.message });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}

export const getCityEvents = (city) => async (dispatch) => {
    try {
        console.log(city)
        const events = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/city/${city}`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        console.log("from event acion", events)
        return dispatch({ type: GET_CITY_EVENTS, payload: events.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getCertificateEvents = () => async (dispatch) => {
    try {
        const events = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/event/`,//http://localhost:4000  ${process.env.REACT_APPCLIENT_URL}
        });
        return dispatch({ type: GET_CERTIFICATE_EVENT, payload: events.data.data });
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error });

    }
}