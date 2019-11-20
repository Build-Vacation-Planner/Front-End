

import { 
    START_VACATION_ADD,
    VACATION_ADD_SUCCESS,
    VACATION_ADD_FAILURE,
    START_VACATION_UPDATE,
    VACATION_UPDATE_SUCCESS,
    VACATION_UPDATE_FAILURE,
    START_VACATION_DELETE,
    VACATION_SUCCESS_DELETE,
    VACATION_DELETE_FAILURE,
    START_COMMENT,
    COMMENT_ADD_SUCCESS,
    COMMENT_ADD_FAILURE,
    COMMENT_UPDATE,
    COMMENT_UPDATE_SUCCESS,
    COMMENT_UPDATE_FAILURE,
    DELETE_COMMENT,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    START_ACTIVITY,
    ACTIVITY_ADD_SUCCESS,
    ACTIVITY_ADD_FAILURE,
    UPDATE_ACTIVITY,
    ACTIVITY_UPDATE_SUCCESS,
    ACTIVITY_UPDATE_FAILURE,
    DELETE_ACTIVITY,
    ACTIVITY_DELETE_SUCCESS,
    ACTIVITY_DELETE_FAILURE,
    START_USER_ADD,
    USER_ADD_SUCCESS,
    USER_ADD_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE} from '../actions'

import { 
    LOGIN_START,
    LOGIN_SUCCESS, 
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE} from "../actions";


const initialState = {
    id: null,
    name:'',
    avatar:'',
    vacations:[
      {
        place:'',
        dates:{},
        activities: [],
        comments:[],
        users:[],
      }
    ],
    isFetching: false,
    errors:''
}


export const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case LOGIN_START:
            return{
                ...state,
                errors:'',
                isFetching:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                errors: '',
                name: action.payload,
                isFetching: false
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                errors:action.payload,
                isFetching:false
            }
        case REGISTER_START:
            return{
                ...state,
                isFetching:true,
                errors:''
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                name:action.payload,
                isFetching:false,
                errors:''
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                errors:action.payload
            }
        
        
            
        default:
            return state
    }
}

