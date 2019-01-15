import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import slackReducer from './slackReducer';


export default combineReducers({
    form: formReducer,
    slack: slackReducer
});