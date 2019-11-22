import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { fetchUser, addActivity, updateActivity, deleteActivity, addVacation } from '../store/actions'
import CCard from './CCard'


const ActivityCard = ({user, fetchUser, addActivity}) => {
    const [activityInput, setActivityInput] = useState({name:''});

    useEffect(() => {
        fetchUser()
    }, [])
    
// const dispatch = useDispatch()

const handleChange = e => {
    const { name, value } = e.target;
    setActivityInput({...activityInput, [name]: value})
}

const handleSubmit = e => {
    e.preventDefault()
    addActivity(activityInput)
    setActivityInput({name:''})
};

console.log(user)
const renderCard2 = () => {
    return (
        <div>
            <h1>working</h1>
        <div>
            
            <StyledForm onSubmit={e => handleSubmit(e, ActivityInput)} className="activity_form">

                <ActivityInput 
                id="activity_input" 
                className="expanded_text_area" 
                name='comments'
                type="text" 
                value={activityInput.name}
                placeholder="Add activity..." 
                onChange={handleChange}
            />
                <br />
                <StyledButton>Post</StyledButton>
                <br />
            </StyledForm>
        </div>


        <div>

            {console.log(user.activities)}
            {/* {user.activities.length ? <h3>{user.activities.map(activity => activity.name)}</h3> : null} */}
        </div>
        </div>
    )
}
return(
    <>
    { user ? renderCard2() : null }
    </>
)
}







const mapStateToProps = state => {
    return{
        user: state.vacations
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
`;