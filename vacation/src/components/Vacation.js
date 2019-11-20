import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import VacationCard from "./VacationCard";
import NavBar from "./NavBar"
import CommentCard from './CommentCard'
import { connect } from "react-redux";
import { deleteVacation, addVacation, fetchUser, updateVacation} from '../store/actions'

const Vacation = ({ user, fetchUser, addVacation, deleteVacation, updateVacation, history }) => {

    const [ newTrip, setNewTrip ] = useState({name: "", place: ""});

    
    useEffect(() => {
        fetchUser()
    }, [])
    /*Create a new trip*/
    const handleChange = e => {
        const {name, value} = e.target;
        setNewTrip({...newTrip, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addVacation(newTrip);
        console.log(`newtrip`, newTrip )
        setNewTrip({ name: "", place: ""});
    }
    console.log(user)
    
    return (
        <div>
            <NavBar history={history}/>
            <h2>My Trips</h2>
            <div>
                <StyledForm onSubmit={e => handleSubmit(e, newTrip)}>
    
                        <StyledH3>Add New Vacation</StyledH3>    
                        <Label>
                            Where to? </Label>
                            <StyledInput
                                name="name"
                                value={newTrip.name}
                                onChange={handleChange}
                                placeholder='vacation idea'
                            />
                            <StyledInput
                                name="place"
                                value={newTrip.place}
                                onChange={handleChange}
                                placeholder='place'
                            />

                        {/* <Label>
                            Suggested dates?</Label>
                            <StyledInput
                                name="place"
                                value={newTrip.date}
                                onChange={handleChange}
                            /> */}
                        
                      
                    <StyledButton>Add Trip</StyledButton>
                </StyledForm>
            </div>
            <Container>
                {user.vacations.map(vacation => {
                console.log(vacation)
                return <VacationCard key={vacation.id} deleteVacation={deleteVacation} vacation={vacation}/>})
                }
                <CommentCard />
            </Container>
        </div>
    );
}

const mapStateToProps = state => {
    
    return {
        user: state
        
    }
};

export default connect(mapStateToProps, { deleteVacation, addVacation, fetchUser, updateVacation})(Vacation);




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