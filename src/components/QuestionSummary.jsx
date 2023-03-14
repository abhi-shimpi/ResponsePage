import { Box, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import classes from './QuestionSummary.module.css';
import QuestionsSideContainer from './QuestionsSideContainer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const QuestionSummary = () => {
  const [data,setData] = useState({});
  const bardata = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'March', value: 300 },
    { name: 'April', value: 400 },
    { name: 'May', value: 500 },
    { name: 'June', value: 600 },
  ];
  return (
    <>
      <Box className={classes.questionSummaryContainer}>
        <Box display={"flex"} justifyContent={"flex-start"} bgcolor={"#FFFFFF"}>
          <Typography variant="caption" color="initial" p={2}>Question Summary</Typography>
          <Typography variant="caption" color="initial" p={2}>Individual Responses</Typography>
        </Box>
        <Divider />
        <Box className={classes.questionsContainer}>
          <Box className={classes.allQuestions}>
            <QuestionsSideContainer setData={setData} />
          </Box>
          <Box className={classes.singleQuestion} >
            <Typography p={2} variant="h6" color="initial">Response Summary</Typography>
            <Typography p={2} bgcolor={"#F7F7F7"} variant="caption" color="initial">What is your name?</Typography>
            <Box className={classes.responseChart}>

              <BarChart display={"inline-block"} width={500} height={300} data={bardata} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>

            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default QuestionSummary;
