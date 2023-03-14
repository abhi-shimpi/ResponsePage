import React from "react";
import { DonutLarge } from "@mui/icons-material";
import Chart from "react-apexcharts";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import classes from './Donut.module.css';

const Donut = () => {
    const options = {
        series: [1, 2],
        labels: ["complete", "Incomplete"],
        plotOptions: {
            pie: {
                donut: {
                    size: "45px",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                        },
                    },
                },
            },
        },
    };
    const series = [7, 3];
    return (
        <>
            <Container maxWidth="xs" className={classes.donutConainer} m={0.5}>
                <Box display={"flex"} flexDirection={"column"}>
                    <Box display={"flex"} className={classes.expand}>
                        <Typography>Overall Completion stats</Typography>
                        <OpenWithRoundedIcon />
                    </Box>
                    <Box className={classes.chart}>
                        <Chart 
                            options={options}
                            series={series}
                            type="donut"
                            width="400"
                            height={300}
                            color="black"
                        />
                    </Box>
                </Box>
            </Container>


        </>
    );
};

export default Donut;
