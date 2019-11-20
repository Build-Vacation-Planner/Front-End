import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const VacationCard = ({vacation, deleteTrip}) => {
    console.log(vacation)
    console.log(vacation.dates)

    const renderCard = () => {
        return (<Card className="vacation-card">
            <p><strong>Place: </strong>{vacation.place}</p>
            <p><strong>Dates: </strong>{ vacation.dates ? vacation.dates.start:""} - {vacation.dates ? vacation.dates.end:""} </p>
            <button onClick={() => deleteTrip(vacation.vacation_id)}>Delete</button>
            <Link to={`/vacation/${vacation.vacation_id}`}>Details</Link>
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