import React, { useState } from 'react';
import Styled from 'styled-components';

const ActivityCard = () => {
    const [activityInput, setActivityInput] = useState();
    return (
        <div>
            <StyledForm method="post" className="activity_form">
                <ActivityInput id="activity_input" className="expanded_text_area" type="text" placeholder="Add activity..." onChange={event => {
            setActivityInput(event.target.value);
          }}/>
                <br />
                <StyledButton>Post</StyledButton>
                <br />
            </StyledForm>
        </div>
    )
}
export default ActivityCard

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