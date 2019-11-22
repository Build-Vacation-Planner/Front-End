import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { connect } from 'react-redux'


export const START_FETCH_USER = 'START_FETCH_USER'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'
export const fetchUser = () => dispatch => {
    dispatch({ type:START_FETCH_USER  })
    axiosWithAuth()
    .get('users/')
    .then (res => {
        console.log(`res`, res)
         dispatch({type:FETCH_USER_SUCCESS, payload: res.data})})
    .catch (err => dispatch({ type: FETCH_USER_FAILURE, payload: err}))
}

export const START_VACATION_ADD = 'START_VACATION_ADD'
export const VACATION_ADD_SUCCESS = 'VACATION_ADD_SUCCESS'
export const VACATION_ADD_FAILURE = 'VACATION_ADD_FAILURE'
export const addVacation = (props) => dispatch => {
    console.log(`props`, props)
    dispatch({ type:START_VACATION_ADD })
    axiosWithAuth()
    
    .post('vacations/', props )
    .then(res => {
        console.log(res); 
        dispatch({ type:VACATION_ADD_SUCCESS, payload: res.data.vacations });
      })    .catch (err => dispatch({ type: VACATION_ADD_FAILURE, payload:err}))
}

export const START_VACATION_UPDATE = 'START_VACATION_UPDATE'
export const VACATION_UPDATE_SUCCESS = 'VACATION_UPDATE_SUCCESS'
export const VACATION_UPDATE_FAILURE = 'VACATION_UPDATE_FAILURE'
export const updateVacation = (props, id) => dispatch => {
    dispatch({type: START_VACATION_UPDATE })
    axiosWithAuth()
    .put(`vacations/${id}`, props)
    .then (res => dispatch({type:VACATION_UPDATE_SUCCESS, payload: res.data.vacations}))
    .catch(err => dispatch({type: VACATION_ADD_FAILURE, payload: err}))
}
export const START_VACATION_DELETE = 'START_VACATION_DELETE'
export const VACATION_SUCCESS_DELETE = 'VACATION_SUCCESS_DELETE'
export const VACATION_DELETE_FAILURE = 'VACATION_DELETE_FAILURE'
export const deleteVacation = (id) => dispatch => {
    dispatch({type:START_VACATION_DELETE})
    axiosWithAuth()
    .delete(`vacations/${id}`)
    .then (res => dispatch({type: VACATION_SUCCESS_DELETE, payload: res.data.vacations}))
    .catch(err => dispatch({type: VACATION_DELETE_FAILURE, payload: err}))
}


export const START_COMMENT = 'START_COMMENT'
export const COMMENT_ADD_SUCCESS = 'COMMENT_ADD_SUCCESS'
export const COMMENT_ADD_FAILURE = 'COMMENT_ADD_FAILURE'
export const newComment = () => dispatch => {
    dispatch({type: START_COMMENT})
    axiosWithAuth()
    .post('/auth/')
    .then (res => dispatch({type: COMMENT_ADD_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: COMMENT_ADD_FAILURE, payload: err}))
}

export const COMMENT_UPDATE = 'COMMENT_UPDATE'
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS'
export const COMMENT_UPDATE_FAILURE = 'COMMENT_UPDATE_FAILURE'
export const updateComment = () => dispatch => {
    dispatch({type: COMMENT_UPDATE})
    axiosWithAuth()
    .put('/auth/')
    .then (res => dispatch({type: COMMENT_UPDATE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: COMMENT_UPDATE_FAILURE, payload: err}))
}

export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'
export const deleteComment = () => dispatch => {
    dispatch({type: DELETE_COMMENT})
    axiosWithAuth()
    .delete('/auth/')
    .then (res => dispatch({type: DELETE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: DELETE_FAILURE, payload: err}))
}
////////////////////////////////////////////////////////////////////////////////////////
export const START_ACTIVITY = 'START_ACTIVITY'
export const ACTIVITY_ADD_SUCCESS = 'ACTIVITY_ADD_SUCCESS'
export const ACTIVITY_ADD_FAILURE = 'ACTIVITY_ADD_FAILURE'
export const addActivity = (props, id) => dispatch => {
    dispatch({type: START_ACTIVITY})
    axiosWithAuth()
    .post(`vacations/${id}/activities`, props)
    .then (res => {
        // console.log(res.data.vacations[1].activities)
        dispatch({type: ACTIVITY_ADD_SUCCESS, payload: res.data.vacations[1].activities})
    })
    
    .catch(err => dispatch({type: ACTIVITY_ADD_FAILURE, payload: err}))
}
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY'
export const ACTIVITY_UPDATE_SUCCESS = 'ACTIVITY_UPDATE_SUCCESS'
export const ACTIVITY_UPDATE_FAILURE = 'ACTIVITY_UPDATE_FAILURE'
export const updateActivity = (id) => dispatch => {
    dispatch({type: UPDATE_ACTIVITY})
    axiosWithAuth()
    .put(`vacations/${id}`)
    .then (res => dispatch({type: ACTIVITY_UPDATE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ACTIVITY_UPDATE_FAILURE, payload: err}))
}

export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const ACTIVITY_DELETE_SUCCESS = 'ACTIVITY_DELETE_SUCCESS'
export const ACTIVITY_DELETE_FAILURE = 'ACTIVITY_DELETE_FAILURE'
export const deleteActivity = () => dispatch => {
    dispatch({type: DELETE_ACTIVITY})
    axiosWithAuth()
    .delete('/auth/')
    .then (res => dispatch({type: ACTIVITY_DELETE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: ACTIVITY_DELETE_FAILURE, payload: err}))
}

export const START_USER_ADD = 'START_USER_ADD'
export const USER_ADD_SUCCESS = 'USER_ADD_SUCCESS'
export const USER_ADD_FAILURE  = 'USER_ADD_FAILURE'
export const addUser = (props, id) => dispatch => {
    dispatch({type: START_USER_ADD})
    console.log(id)
    axiosWithAuth()
    .post(`vacations/${id}/users`, props)
    .then (res => dispatch({type: USER_ADD_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: USER_ADD_FAILURE, payload: err}))
}

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'
export const updateUser = () => dispatch => {
    dispatch({type: UPDATE_USER})
    axiosWithAuth()
    .put('users/')
    .then (res => dispatch({type: UPDATE_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: UPDATE_USER_FAILURE, payload: err}))
}

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'
export const deleteUser = () => dispatch =>{
    dispatch({type: DELETE_USER})
    axiosWithAuth()
    .delete('/auth/')
    .then (res => dispatch({type: DELETE_USER_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: DELETE_USER_FAILURE, payload: err}))
}










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
     .post(`/auth/register`, user)
     .then(res => {dispatch({type: REGISTER_SUCCESS, payload: res.data})
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