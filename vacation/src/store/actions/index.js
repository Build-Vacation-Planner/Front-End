import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { connect } from 'react-redux'



export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const SAVING_COMMENTS_START = 'SAVING_COMMENTS_START'
export const SAVING_COMMENTS_SUCCESS = 'SAVING_COMMENTS_SUCCESS'
export const SAVING_COMMENTS_FAILURE = 'SAVING_COMMENTS_FAILURE'

export const getRegister = (user) => dispatch => {
    dispatch({ type: REGISTER_START })
    axiosWithAuth()
     .post('/auth/register', user)
     .then(res => {dispatch ({type: REGISTER_SUCCESS, payload: res.data})
    }, true
    )
    .catch(err => dispatch({type: REGISTER_FAILURE, payload:err}))
}

export const getLogin = (user) => dispatch => {
    dispatch({type: LOGIN_START, payload:'Logging In...'})
    axiosWithAuth()
        .post('/auth/login', user)
        .then(res => {dispatch({type: LOGIN_SUCCESS, payload: res.data})
         }, true
        )
        .catch(err => dispatch({type: LOGIN_FAILURE, payload:err}))
}