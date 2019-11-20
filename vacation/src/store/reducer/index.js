import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    SAVE_ITEM,

    FETCHING_COMMENTS_START,
    FETCHING_COMMENTS_SUCCESS,

    SAVING_COMMENTS_START,
    SAVING_COMMENTS_SUCCESS,
    SAVING_COMMENTS_FAILURE

} from '../actions'

const initialState = {
    items:[],
    errors:'',
    isFetching: false
}

export const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
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
                items: payload,
                isFetching: false
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                errors:payload,
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
                items:payload,
                isFetching:false,
                errors:''
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                errors:payload
            }
        case SAVING_COMMENTS_START:
            return{
                ...state,
                isFetching:true,
                errors:''
            }
        case SAVING_COMMENTS_SUCCESS:
            return{
                ...state,
                items: payload,
                isFetching:false,
                errors:''
            }
        case SAVING_COMMENTS_FAILURE:
            return{
                ...state,
                error:payload
            }
        default:
            return state
    }
}

