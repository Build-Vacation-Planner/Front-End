import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { deleteVacation, fetchUser, updateVacation, addUser } from '../store/actions'
import ActivityCard from "./ActivityCard";
import './VacationCard.css'
const VacationCard = ({user, fetchUser, vacation}) => {
    // console.log(vacation)
    // console.log(vacation.dates)

const [edit, setEdit] = useState(false)
const [edit2, setEdit2] = useState(false)
const [value, setValue] = useState({name: "", place: ""})
const [person, setPerson] = useState({username:''})

useEffect(() => {
    fetchUser()
}, [])

const dispatch = useDispatch()

const handleEdit = e => {
    e.stopPropagation()
    e.persist()
    setValue({name: vacation.name, place: vacation.place})
    setEdit(true)
}
const handleChange = (e) =>{
    e.persist()
    setValue(prevValue => ({...prevValue, [e.target.name]:e.target.value})) 
}
const handleSubmit = () => {
    dispatch(updateVacation(value,vacation.id))
    setEdit(false)
}
///add users
const handleEdit2 = e => {
    e.stopPropagation()
    e.persist()
    setPerson({username: vacation.username})
    
    setEdit2(true)
}
console.log(`test`, vacation.username)
const handleSubmit2 = () => {
    console.log(`PERSON`, person)
    dispatch(addUser(person, vacation.id))
    setEdit2(false)
}
const handleChange2 = (e) =>{
    e.persist()
    setPerson(prevValue2 => ({...prevValue2, [e.target.name]:e.target.value})) 
}
    const renderInput = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={value.name}/>
                <input type="text" name="place" onChange={handleChange} value={value.place}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
    const renderInput2 = () => {
        return (
            <form onSubmit={handleSubmit2}>
                <input type="text" name="username" onChange={handleChange2} value={person.username}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
    console.log(user[0].users)
    const renderCard = () => {
        return (<Card className="vacation-card" >
            <span>Click on idea to edit</span>

            <p><strong>Vacation idea: </strong><span  onClick={handleEdit}>{vacation.name}</span></p>

            <p><strong>Place: </strong>{vacation.place}</p>
           {vacation.activities.map(i => {
               console.log(`i`, i)
                return<p key={i.id}>{i.name}</p>
            })}

            <p><strong>Dates: </strong>{ vacation.dates ? vacation.dates.start:""} - {vacation.dates ? vacation.dates.end:""} </p>

            <button onClick={() => dispatch(deleteVacation(vacation.id))}>Delete</button>

            <Link to={`/commentcard/${vacation.id}`}>Comments</Link>
            <Link to={`/activitycard/${vacation.id}`}>Activities</Link>

            {edit? renderInput():null}
            
            <div onClick={handleEdit2}>add user</div>
            {edit2? renderInput2():null}
            <p> Added to the trip</p>
            <div>
            {/* { vacation.users.length ? <p>{vacation.users[0].username}</p> : null} */}
            { vacation.users.length ? <p>{vacation.users.map(m => m.username)}</p> : null}
                
            </div>
        </Card>
        )
    }
    return (
        <>
        {vacation ? renderCard(): null}
        
        </>
        
    );
}
const mapStateToProps = state => {

    return{
        user: state.vacations
    }
}
export default connect(mapStateToProps, {fetchUser})(VacationCard);

const Card = Styled.div`
    border: black solid 2px;
    border-radius: 5px;
    width: 250px;
    margin: 30px;
`