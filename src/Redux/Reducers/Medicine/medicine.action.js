import axios from "axios";
import { GET_MEDICINES, GET_MEDICINE } from "./medicine.type";

export const getMedicines = () => async (dispatch) => {
    try {
        const medicines = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine`,
        });
        console.log(medicines, "From action medicines")
        return dispatch({
            type: GET_MEDICINES,
            payload: medicines
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const getMedicine = () => async (dispatch) => {
    try {
        const medicine = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine`,
        });
        console.log(medicine, "From action medicine")
        return dispatch({
            type: GET_MEDICINE,
            payload: medicine
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
}