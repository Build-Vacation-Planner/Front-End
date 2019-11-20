import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import VacationCard from "./VacationCard";
import NavBar from "./Nav";
import { connect } from "react-redux";
import { deleteVacation, addVacation} from '../store/actions'

const Vacation = ({ vacations, deleteVacation, addVacation}) => {

    const [ newTrip, setNewTrip ] = useState({place: "", dates: ""});

    
    useEffect(() => {
        
    }, [])



    /*Create a new trip*/
    const handleChange = e => {
        const {name, value} = e.target;
        setNewTrip({...newTrip, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addVacation(newTrip);
        setNewTrip({title: "", place: "", dates: ""});
    }

    return (
        <div>
            <NavBar/>
            <h2>My Trips</h2>
            <div>
                <StyledForm onSubmit={e => handleSubmit(e, newTrip)}>
    
                        <StyledH3>Add New Vacation</StyledH3>    
                        <Label>
                            Where to? </Label>
                            <StyledInput
                                name="place"
                                value={newTrip.place}
                                onChange={handleChange}
                            />
                        
                        <Label>
                            Suggested dates?</Label>
                            <StyledInput
                                name="dates"
                                value={newTrip.dates}
                                onChange={handleChange}
                            />
                        
                      
                    <StyledButton>Add Trip</StyledButton>
                </StyledForm>
            </div>
            <Container>
                {vacations.map(vacation => <VacationCard key={vacation.id} deleteVacation={deleteVacation} vacation={vacation}/>)}
            </Container>
        </div>
    );
}


const mapStateToProps = state => {
    
    return {
        vacations: state.rootReducer.vacations
        console.log(`state`, state)
    }
};

export default connect(mapStateToProps, { deleteVacation, addVacation})(Vacation);




const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f3f3f3;
  border: 1px solid orange;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = Styled.label`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
`
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-weight: 400;
font-size: 14px;
color: black;
margin-bottom: 10px;
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
`;

const StyledH3 = Styled.h3`
text-align:center
`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: blue;
cursor: pointer;
font-weight:bold;
font-size:16px;
border-radius: 7px;
width: 80%;
margin: 0 auto;
margin-top: 15px;
height: 50px;
&:hover{
  background:lightblue
}
`;

const Container = Styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
    justify-content: space-between;
    flex-wrap: wrap;
`