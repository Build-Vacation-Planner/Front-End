import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { fetchUser, addActivity, updateActivity, deleteActivity, addVacation } from '../store/actions'
import CCard from './CCard'


const ActivityCard = ({activities, fetchUser, addActivity, match}) => {
    const [activityInput, setActivityInput] = useState('');

    useEffect(() => {
        fetchUser()
    }, [])
    
// const dispatch = useDispatch()

const handleChange4 = e => {
    
    setActivityInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault()
    console.log(match)
    addActivity({name:activityInput}, match.params.id)
    setActivityInput('')
};

console.log(activities)

const renderCard2 = () => {
    return (
        <div>
            <h1>Activities</h1>
        <div>
            
            <StyledForm onSubmit={handleSubmit} className="activity_form">

                <ActivityInput 
                // id="activity_input" 
                // className="expanded_text_area" 
                name='name'
                type="text" 
                value={activityInput}
                placeholder="Add activity..." 
                onChange={handleChange4}
            />
                <br />
                <StyledButton>Post</StyledButton>
                <br />
            </StyledForm>
        </div>


        <div>
            {console.log(activities)}
            {/* {user.vacations > 0  ? console.log(user.vacations[2]) : null} */}
            <h3>{activities.map(activity => activity.name)}</h3> 
        </div>
        </div>
    )
}
return(
    <>
    { activities ? renderCard2() : null }
    </>
)
}

const mapStateToProps = state => {
    return{
        activities: state.vacations
    }
}

export default connect(mapStateToProps, {addActivity, fetchUser})(ActivityCard)




const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
    margin: 0 auto;
    text-align: left;
    background: #f3f3f3;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;

const StyledButton = Styled.button`
    background: #0500FF;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    width: 80%
    margin: 0 auto;
    margin-top:25px;
    font-weight:bold;
    font-size:16px;
    height:50px;
    border-radius:5px
    &:hover{
    background:#111125
    }
`;

const ActivityInput = Styled.input`
    width: 200px;
    height: 100px;
    padding: 5px 20px;
    margin: 0 auto;
    font-size: 14px;
    color: black;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 20px;
`;