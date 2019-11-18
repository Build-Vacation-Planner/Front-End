import React, { useState} from "react";
import "./Login.css";
import Styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = props => {

    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""});

    const handleReturningUser = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("https://bw-vacation-planner.herokuapp.com/api/auth/login", creds)
            .then(res => {
                props.history.push("/vacation");
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
        <h2>Login</h2>
        <StyledForm onSubmit={(e) => submitReturningUser(e, returningUser)}>
            <StyledH3>Sign in here.</StyledH3>
            <Label>Enter Username</Label>
            <StyledInput
                name="username"
                value={returningUser.username}
                onChange={handleReturningUser}
            />
            <Label>Enter Password</Label>
            <StyledInput
                name="password"
                value={returningUser.password}
                onChange={handleReturningUser}
            />
            <StyledButton>Login</StyledButton>
        </StyledForm>
        <StyledParagraph>Don't have an account? Sign up <Link to="/signup">here</Link>.</StyledParagraph>
        </div>
    );
}

export default Login;

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

const StyledH3 = Styled.h3`
    text-align: left;
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

const StyledParagraph = Styled.div`
    text-align: center;
    margin-top: 20px;
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