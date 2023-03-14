import { Container, Typography } from '@mui/material';
import React from 'react'
import classes from './QuestionsSideContainer.module.css';
import QuestionSummary from './QuestionSummary';
import { useState } from 'react';

const QuestionsSideContainer = ({ setData }) => {

    const [respData, setRespData] = useState({});

    const questions = [
        {
            "question": "What is your Name1?",
            "data":[
                { name: 'Jan', value: 100 },
                { name: 'Feb', value: 200 },
                { name: 'March', value: 300 },
            ]
        },
        {
            "question": "What is your Name2?",
            "data": [
                { name: 'Jan', value: 10 },
                { name: 'Feb', value: 200 },
                { name: 'March', value: 300 },
            ]
        },
        {
            "question": "What is your Name3?",
            "data": [
                { name: 'Jan', value: 50 },
                { name: 'Feb', value: 30 },
                { name: 'March', value: 300 },
            ]
        },
    ]

    const handleClick = (arg) => {
        setData(arg)
    }

    return (
        <>
        {
            questions.map((question)=>(
                <div key={question.question} className={classes.singalQuestion} onClick={()=>handleClick(question)}>
                    <Typography style={{ fontSize: "13px" }} variant="caption" color="initial">{question.question} </Typography>
                </div>
            ))
        }
           
        </>
    )
}

export default QuestionsSideContainer;