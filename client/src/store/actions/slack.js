import axios from 'axios';
import { GET_EMPLOYEE_LIST, LOADING_DATA, LOADING_ERROR, MESSAGE_ERROR, MESSAGE_SUCCESS } from './types';

export const fetchEmployeeList = () => async dispatch => {
    dispatch({type: LOADING_DATA})
    try {
        let res = await axios.get('/api/employees')
        dispatch({type: GET_EMPLOYEE_LIST, payload: res.data})
    } catch(er) {
        dispatch({type: LOADING_ERROR})
    }
}

export const postEmployeeMessage = (vistor) => async dispatch => {
    try {
        let res = await axios.post('/api/employees', vistor)
        res.data.success ? dispatch({type: MESSAGE_SUCCESS}) : dispatch({type: MESSAGE_ERROR})
    } catch(er) {
        dispatch({type: MESSAGE_ERROR})
    }
}