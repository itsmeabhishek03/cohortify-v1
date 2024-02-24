import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {

    dispatch({ type:"LOGIN_START"});
    try {
        
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
        
    }
};