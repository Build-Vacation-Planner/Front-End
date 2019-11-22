import React, { useState } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux'



const CommentCard = () => {
    const [commentInput, setCommentInput] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(commentInput);
    }
    return (

        <div>
            <h1>Comments</h1>
            <StyledForm method="post" className="comment_form" onSubmit={event => handleSubmit(event)}>
                <CommentInput id="comment_input" className="expanded_text_area" type="text" placeholder="Add comment..." onChange={event => {
            setCommentInput(event.target.value);
          }}/>
                <br />
                <StyledButton>Post</StyledButton>
                <br />
            </StyledForm>
        </div>
    )
}
export default CommentCard

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

const CommentInput = Styled.input`
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