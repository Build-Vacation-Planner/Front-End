import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const VacationCard = ({vacation, deleteVacation}) => {
    console.log(vacation)
    console.log(vacation.dates)

    const renderCard = () => {
        return (<Card className="vacation-card">

            <p><strong>Vacation idea: </strong>{vacation.name}</p>
            <p><strong>Place: </strong>{vacation.place}</p>
           {/* {vacation.activities.map(i => {
               console.log(`i`, i)
                return<p>{i.name}</p>
            })} */}

            <p><strong>Dates: </strong>{ vacation.dates ? vacation.dates.start:""} - {vacation.dates ? vacation.dates.end:""} </p>

            <button onClick={() => deleteVacation(vacation.id)}>Delete</button>
            
            <Link to={`/vacation/${vacation.id}`}>Details</Link>
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