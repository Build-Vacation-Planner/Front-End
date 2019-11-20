import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const VacationCard = props => {
    console.log(props)
    return (
        <Card className="vacation-card">
            <p><strong>Place: </strong>{props.vacation.place}</p>
            <p><strong>Dates: </strong>{props.vacation.dates}</p>
            <button onClick={() => props.deleteTrip(props.vacation.vacation_id)}>Delete</button>
            <Link to={`/vacation/${props.vacation.vacation_id}`}>Details</Link>
        </Card>
    );
}

export default VacationCard;

const Card = Styled.div`
    border: black solid 2px;
    border-radius: 5px;
    width: 250px;
    margin: 30px;
`