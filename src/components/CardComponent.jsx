import React from 'react'
import { Container } from '@mui/system';
import { Card, CardContent, Typography, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from "./CardComponent.module.css";
import BarChart from './BarChart';

export const CardComponent = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <>
      <Container className={classes.barchartContainer}>
        <Card>
          <CardContent>
            <Box>
              <Typography variant='h6'>Response Trends</Typography>
            </Box>

            <Box className={classes.dropDown} display={"flex"} flexDirection={"row"}>
              <Typography variant="caption" color="initial">Select Duration you want to see by</Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className={classes.barchart}>
              <BarChart/>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
