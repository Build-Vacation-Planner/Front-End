import React, { useState} from "react";
import "./Login.css";
import Styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import VacPlanFooter from "./VacPlanFooter";

 
const Login = props => {

    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""});

    const handleReturningUser = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
    }

    const submitReturningUser = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/auth/login', returningUser)
            .then(res => {
                
                localStorage.setItem("token", res.data.token);
                props.history.push("/vacation");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="sunset_page">
            <div className="top">
                <form className="enter_form" onSubmit={submitReturningUser}>
                <div className="enter_form_top">
                    <h3>Sign in here</h3>
                    <label className="enter_label">Enter Username</label>
                        <input
                    //correct={true}
                    type='text'
                    name="username"
                    value={returningUser.username}
                    onChange={handleReturningUser}
                    placeholder='username'
                    className="enter_input"
                    />

                    

                    <label className="enter_label">Enter Password</label>
                    <input
                        //correct={false}
                        type="password"
                        name="password"
                        value={returningUser.password}
                        onChange={handleReturningUser}
                        placeholder='password'
                        className="enter_input"
                    />
                    <br />
                    <Message>Valid username must be entered.</Message>
                </div>
            
                <button className="enter_button">Login</button>
                <p className="already">Don't have an account? Sign up <Link to="/signup">here</Link>.</p>
                </form>
        
            </div>
       
        <footer className="footer">
            <VacPlanFooter />
        </footer>
        </div>
    );
}

export default Login;

// const Label = Styled.label`
//     text-align: left;
//     margin-left: 30px;
// `;

// const StyledInput = Styled.input`
//     width: 200px;
//     padding: 5px 20px;
//     margin: 0 auto;
//     font-size: 14px;
//     color: black;
//     background: #fff;
//     border: 1px solid #fff;
//     border-radius: 5px;
//     background: ${prop => prop.correct ? 'white' : 'red'};
// `;

// const StyledH3 = Styled.h3`
//     text-align: left;
// `;

// const StyledButton = Styled.button`
//     background: #0500FF;
//     border-color: transparent;
//     color: #fff;
//     cursor: pointer;
//     width: 80%
//     margin: 0 auto;
//     margin-top:25px;
//     font-weight:bold;
//     font-size:16px;
//     height:50px;
//     border-radius:5px
//     &:hover{
//     background:#111125
//     }
// `;

// const StyledParagraph = Styled.div`
//     text-align: center;
//     margin-top: 20px;
//     `;

// const StyledForm = Styled.form`
//     padding: 0 30px 25px 30px;
//     width: 300px;
//     margin: 0 auto;
//     text-align: left;
//     background: #f3f3f3;
//     border: 1px solid #fff;
//     border-radius: 5px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// `;

const Message = Styled.label`
  margin-bottom: 2px;
text-align: center;
  color: red;
`;
