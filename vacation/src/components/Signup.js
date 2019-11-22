import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components';
import "./Signup.css";
import axios from "axios";
import VacPlanFooter from "./VacPlanFooter";


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
        <div className="sunset_page">
            <div className="top">

                <form className="enter_form" onSubmit={e => submitHandler (e, newUser)}>
                    <div className="enter_form_top">
                        <label className="enter_label">
                            Enter Username
                            <br />

                            <input
                            
                            type='text' 
                            name='username'
                            placeholder='username'
                            value={newUser.username}
                            onChange={changeHandler}
                            className="enter_input"
                            
                            />

                            

                            <br />
                        </label>
                        <label className="enter_label">
                            Create Password
                            <br />
                            <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={newUser.password}
                            onChange={changeHandler}
                            className="enter_input"

                            />

                            <br />

                        </label>
                    </div>
                    <button className="enter_button">Sign Up</button>
                    <br />
                    <p className="already">Already have an account? Sign in <Link to="/">here</Link>.</p>
                </form>
            </div>
            <footer className="footer">
                <VacPlanFooter />
            </footer>
        </div>
    )
}

export default Signup

// const Label = Styled.label`
    
// `;

// const StyledInput = Styled.input`
   

// const StyledButton = Styled.button`

// `;

// const StyledForm = Styled.form`
  
// `;

// const StyledParagraph = Styled.div`
   
//     `;
