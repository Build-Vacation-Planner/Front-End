import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { useDispatch } from 'react-redux'

import { deleteVacation, updateVacation } from '../store/actions'

const VacationCard = ({vacation}) => {
    console.log(vacation)
    console.log(vacation.dates)

const [edit, setEdit] = useState(false)
const [value, setValue] = useState({name: "", place: ""})

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

    const renderInput = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={value.name}/>
                <input type="text" name="place" onChange={handleChange} value={value.place}/>
                <button type="submit">Submit</button>
            </form>
        )
    }

    const renderCard = () => {
        return (<Card className="vacation-card">

            <p><strong>Vacation idea: </strong><span name="name" onClick={handleEdit}>{vacation.name}</span></p>
            <p><strong>Place: </strong>{vacation.place}</p>
           {/* {vacation.activities.map(i => {
               console.log(`i`, i)
                return<p>{i.name}</p>
            })} */}

            <p><strong>Dates: </strong>{ vacation.dates ? vacation.dates.start:""} - {vacation.dates ? vacation.dates.end:""} </p>

            <button onClick={() => dispatch(deleteVacation(vacation.id))}>Delete</button>

            <Link to={`/vacation/${vacation.id}`}>Details</Link>
            {edit? renderInput():null}
        </Card>)
    }
    return (
        <>
        {vacation ? renderCard(): null}
        
        </>
        
    );
}

export default VacationCard;

const Card = Styled.div`
    border: black solid 2px;
    border-radius: 5px;
    width: 250px;
    margin: 30px;
`