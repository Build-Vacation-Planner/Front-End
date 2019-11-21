import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components';
import "./Signup.css";
import axios from "axios";


const Signup = (props) => {
    const [newUser, setNewUser] = useState({username: "", password: ""});

    const submitHandler = (e, userReg) => {
        e.preventDefault()
        axios.post("https://vacation-planner-be.herokuapp.com/api/auth/register", userReg)
        .then(res => {props.history.push('/')})
        .catch(err => console.log(err));
    }

    const changeHandler = (e) => {
        const{name, value} = e.target;
        setNewUser({...newUser, [name]:value})
    }



    return (
        <div>
            <div className="top">
                <h2>Sign Up</h2>

                <StyledForm onSubmit={e => submitHandler (e, newUser)}>

                    <Label>
                        Enter Username
                        <br />

                        <StyledInput
                         
                         type='text' 
                         name='username'
                         placeholder='username'
                         value={newUser.username}
                         onChange={changeHandler}
                         
                         />

                        

                        <br />
                    </Label>
                    <Label>
                        Create Password
                        <br />
                        <Styledinput

                         type='password'
                         name='password'
                         placeholder='password'
                         value={newUser.password}
                         onChange={changeHandler}

                         />

                        <br />

                    </Label>
                    {/* <label>
                        Confirm Password
                        <br />
                        <input 
                            type='password'
                            name='password'
                            placeholder='password'
                            value={newUser.password}
                            onChange={changeHandler}
                        />
                        <br />
                    </label> */}
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
