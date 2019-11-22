import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { deleteVacation, fetchUser, updateVacation, addUser } from '../store/actions'


const Users = ({fetchUser}) => {

useEffect(() => {
    fetchUser()
}, [])

const dispatch = useDispatch()


return(
    <div>
        <h1>hi</h1>
    </div>
)
}
const mapStateToProps = state => {
    return{
        user:state.vacations
    }
}

export default connect(mapStateToProps, {})(Users)