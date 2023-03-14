import { Container, Typography } from '@mui/material';
import React from 'react'
import classes from './QuestionsSideContainer.module.css';
import QuestionSummary from './QuestionSummary';
import { useState } from 'react';

const QuestionsSideContainer = ({ setData }) => {

    const questions = [
       "what is your name 1?",
        "what is your name 2?",
        "what is your name 3?",
        "what is your name 4?",
        "what is your name 5?",
    ]

    const handleClick = (arg) => {
        setData(arg)
    }

    return (
        <>
        {
            questions.map((question)=>(
                <div key={question} className={classes.singalQuestion} onClick={()=>handleClick(question)}>
                    <Typography style={{ fontSize: "13px" }} variant="caption" color="initial">{question} </Typography>
                </div>
            ))
        }
           
        </>
    )
}

export default QuestionsSideContainer;