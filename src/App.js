import React from "react";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container'
import { Box, Divider } from "@mui/material";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import EventBusyRoundedIcon from '@mui/icons-material/EventBusyRounded';
import SensorsRoundedIcon from '@mui/icons-material/SensorsRounded';
// import { Box, Typography, Switch } from '@mui/material'
const label = { inputProps: { 'aria-label': 'Switch demo' } };
// import './FormBar.module.css';
import Donut from "./components/Donut";
import QuestionSummary from "./components/QuestionSummary";
import { CardComponent } from "./components/CardComponent";
import "./App.css";
// import FormBar from "./components/FormBar";

const App = () => {

  const arrayOfEle = [
    {
      "icon":<EventAvailableIcon ></EventAvailableIcon>,
      "text1":"created at",
      "text2":"26-3-23"
    },
    {
      "icon": <DescriptionRoundedIcon ></DescriptionRoundedIcon>,
      "text1": "created at",
      "text2": "26-3-23"
    },
    {
      "icon": <NoteAltRoundedIcon ></NoteAltRoundedIcon>,
      "text1": "created at",
      "text2": "26-3-23"
    },
    {
      "icon": <EventBusyRoundedIcon ></EventBusyRoundedIcon>,
      "text1": "created at",
      "text2": "26-3-23"
    },
    {
      "icon": <SensorsRoundedIcon ></SensorsRoundedIcon>,
      "text1": "created at",
      "text2": "26-3-23"
    }

  ]

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <>
      <Container maxWidth="lg" className="container" display={"flex"}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>

        <Container className="formCard">
          <Box display={"flex"} flexDirection={"column"}>
            <Box className="surveyDetails" order={1} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>

              <Box>
                <Typography variant="cation" color="initial">Survey Form</Typography>
                <Typography variant="h5" color="initial">Assign Sales Consultant</Typography>
              </Box>

              <Box alignSelf={"center"}>
                <Switch {...label} defaultChecked />
              </Box>

            </Box>

            <Box order={2} display={"flex"} flexDirection={"row"}>
              
              {
                arrayOfEle.map((ele)=>(
                  <Box key={ele.icon} display={"flex"} className="surveyInfo">
                    <Box className="icons">
                      {ele.icon}
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography variant="caption" color="initial">{ele.text1}</Typography>
                      <Typography variant="button" color="initial">{ele.text2}</Typography>
                    </Box>
                  </Box>
                ))
              }

            </Box>
          </Box>
        </Container>


        <Box display={"flex"} className="barAndPieChart" >
          <Donut></Donut>
          <CardComponent></CardComponent>
        </Box>

        <div>
          <QuestionSummary></QuestionSummary>
        </div>

      </Container>
    </>

  )
}

export default App;