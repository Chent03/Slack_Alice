import { GET_EMPLOYEE_LIST, LOADING_DATA, LOADING_ERROR } from '../actions/types';

const initState = {
    loading: false,
    loadingError: false,
    employees: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case LOADING_DATA:
            return loadingData(state);
        case LOADING_ERROR:
            return loadingError(state);
        case GET_EMPLOYEE_LIST:
            return getEmployeelist(state, action);
        default:
            return state;
    }
}

const loadingData = (state) => {
    return {
        ...state,
        loading: true,
        loadingError: false
    }
}

const loadingError = (state) => {
    return {
        ...state,
        loading: false,
        loadingError: true
    }
}

const getEmployeelist = (state, action) => {
    let employees = action.payload.filter(em => em.FirstName !== "slackbot")
    return {
        ...state,
        employees
    }
}

export default reducer;