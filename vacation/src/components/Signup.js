import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components';
import "./Signup.css";

const Signup = () => {
    const [newUser, setNewUser] = useState({email: "", password: ""});

    const handleChanges = event => {
        setNewUser({...newUser, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newUser);
        console.log(password);
    }
    
    return (
        <div>
            <div className="top">
                <h2>Sign Up</h2>
                <StyledForm onSubmit={event => handleSubmit(event)}>
                    <Label>
                        Enter Email
                        <br />
                        <StyledInput id="email" type="email" name="email" onChange={event => handleChanges(event)} />
                        <br />
                    </Label>
                    <label>
                        Create Password
                        <br />
                        <StyledInput id="password" type="text" name="password" onChange={event => handleChanges(event)} />
                        <br />
                    </label>
                    <label>
                        Confirm Password
                        <br />
                        <input id="confirm_password" type="text" />
                        <br />
                    </label>
                    <StyledButton>Sign Up</StyledButton>
                    <br />
                    <StyledParagraph>Already have an account? Sign in <Link to="/">here</Link>.</StyledParagraph>
                </StyledForm>
            </div>
        </div>
    )
}

export default Signup

const Label = Styled.label`
    text-align: left;
    margin-left: 30px;
`;

const StyledInput = Styled.input`
    width: 200px;
    padding: 5px 20px;
    margin: 0 auto;
    font-size: 14px;
    color: black;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
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

const StyledParagraph = Styled.div`
    text-align: center;
    margin-top: 20px;
    `;