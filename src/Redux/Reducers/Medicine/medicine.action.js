import axios from "axios";
import { GET_ALL_MEDICINES, GET_MEDICINE, SEARCH_MEDICINE } from "./medicine.type";

export const getMedicines = () => async (dispatch) => {
    try {
        const medicines = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine`,
        });
        return dispatch({
            type: GET_ALL_MEDICINES,
            payload: medicines.data.data
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
        // console.log(medicine, "From action medicine")
        return dispatch({
            type: GET_MEDICINE,
            payload: medicine
        })
    }
    catch (error) {
        return dispatch({ type: "ERROR", payload: error })

    }
}

export const searchMedicine = (searchtext) => async (dispatch) => {
    try {
        // console.log(searchtext, "From action medicine")
        const Medicineslist = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_CLIENT_URL}/medicine/search/${searchtext}`,
        });
        console.log(Medicineslist, "From action medicine")
        return dispatch({ type: SEARCH_MEDICINE, payload: Medicineslist.data.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};