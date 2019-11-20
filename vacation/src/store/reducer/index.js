

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
    
    vacations:[
      {
        id: null,
        name:'',
        description:'',
        place:'',
        picture:'',
        dates:{},
        activities: [],
        comments:[],
        users:[],
        
      }
    ]
    ,
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
                isFetching:false,
                errors: action.payload
                
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
                isFetching: false,
                errors: action.payload
            }
        case START_COMMENT:
            return{
                ...state,
                isFetching:true,
                errors:'',
            }
        case COMMENT_ADD_SUCCESS:
            return{
                ...state,
                comments:action.payload,
                isFetching: false,
                errors:''
            }
        case COMMENT_ADD_FAILURE:
            return{
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case COMMENT_UPDATE:
            return {
                ...state,
                isFetching: true,
                errors:''
            }
        case COMMENT_UPDATE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                comments:action.payload,
                errors: ''
            }
        case COMMENT_UPDATE_FAILURE:
            return{
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case DELETE_COMMENT:
            return{
                ...state,
                isFetching:true,
                errors:''
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                comments: action.payload,
                errors:''
            }
        case DELETE_FAILURE:
            return{
                ...state,
                isFetching: false,
                errors: action.payload
            }
        case START_VACATION_ADD:
            return{
                ...state,
                isFetching: true,
                errors:''
            }
        case VACATION_ADD_SUCCESS:
            return{
                ...state,
                isFetching:false,
                vacations: action.payload,
                errors:''
            }
        case VACATION_ADD_FAILURE:
            return{
                ...state,
                isFetching:false,
                errors: action.payload
            }
        case START_VACATION_UPDATE:
            return{
                ...state,
                isFetching:true,
                errors:''
            }
        case VACATION_UPDATE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                vacations: action.payload,
                error:''
            }
        case VACATION_UPDATE_FAILURE:
            return{
                ...state,
                isFetching:false,
                errors: action.payload
            }
        case START_VACATION_DELETE:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case VACATION_SUCCESS_DELETE:
            return{
                ...state,
                isFetching: false,
                vacations: action.payload,
                error:''
            }
        case VACATION_DELETE_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case START_ACTIVITY:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case ACTIVITY_ADD_SUCCESS:
            return{
                ...state,
                isFetching: false,
                activities: action.payload,
                error:''
            }
        case ACTIVITY_ADD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case UPDATE_ACTIVITY:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case ACTIVITY_UPDATE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                activities: action.payload,
                error:''
            }
        case ACTIVITY_UPDATE_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case DELETE_ACTIVITY:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case ACTIVITY_DELETE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                activities: action.payload,
                error:''
            }
        case ACTIVITY_DELETE_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case START_USER_ADD:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case USER_ADD_SUCCESS:
            return{
                ...state,
                isFetching: false,
                users: action.payload,
                error:''
            }
        case USER_ADD_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case UPDATE_USER:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case UPDATE_USER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                users: action.payload,
                error:''
            }
        case UPDATE_USER_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case DELETE_USER:
            return{
                ...state,
                isFetching: true,
                err:''
            }
        case DELETE_USER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                users: action.payload,
                error:''
            }
        case DELETE_USER_FAILURE:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        default:
            return state
    }
}

