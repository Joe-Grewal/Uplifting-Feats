import React from "react";
import '../styles/App.scss';
import {useState} from 'react';
import { Button, Container, TextField, FormControl, InputLabel, MenuItem, Select, IconButton, OutlinedInput, InputAdornment } from '@mui/material';

export default function Filters2 () {

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //form input values below
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [weight, setWeight] = useState("");
  const [dietType, setDietType] = useState("");
  const [primaryWorkout, setPrimaryWorkout] = useState("");
 


  return (
    <div className="search_filters_container">
      
      {/* AGE -----------------------*/}
      <div className="age_range">
      <FormControl  
          sx={{
            width: '50%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          hover: 'white',
          borderRadius: '20px',
          mb: '10px'
          }}
          className="text_field"
          color="secondary"
          >
            <label for="age"><h3>Age:</h3></label>
        <Select
          className="dropdown_menu"
          fullWidth
          onChange={(e) => setAge(e.target.value)}
          labelId="age-select-label"
          id="age-select"
          label="Age*"
          value={age}
        >
        <MenuItem value={"20-25"}>20 - 25</MenuItem>
        <MenuItem value={"25-30"}>25 - 30</MenuItem>
        <MenuItem value={"30-35"}>30 - 35</MenuItem>
        <MenuItem value={"35-40"}>35 - 40</MenuItem>
        <MenuItem value={"40-45"}>40 - 45</MenuItem>
        <MenuItem value={"45-50"}>45 - 50</MenuItem>
        <MenuItem value={"50-55"}>50 - 55</MenuItem>
        <MenuItem value={"55-60"}>55 - 60</MenuItem>
        <MenuItem value={"60-65"}>60 - 65</MenuItem>
        <MenuItem value={"65-70"}>65 - 70</MenuItem>
        <MenuItem value={"70-75"}>70 - 75</MenuItem>
        <MenuItem value={"75-80"}>75 - 80</MenuItem>
        <MenuItem value={"80-85"}>80 - 85</MenuItem>
        <MenuItem value={"85-90"}>85 - 90</MenuItem>
        <MenuItem value={"90-95"}>90 - 95</MenuItem>
        <MenuItem value={"95-100"}>95 - 100</MenuItem>
        </Select>
        </FormControl>
      </div>

      {/* GENDER -----------------------*/}

      <div className="gender">
      <FormControl  
          sx={{
            width: '50%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          borderRadius: '20px',
          mb: '10px'
          }}
          className="text_field"
          color="secondary"
          >
            <label for="gender"><h3>Gender:</h3></label>
        <Select
          className="dropdown_menu"
          fullWidth
          onChange={(e) => setGender(e.target.value)}
          labelId="gender-select-label"
          id="gender-select"
          label="Gender*"
          value={gender}      
        >
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
      </div>

      
      {/* HEIGHT  -----------------------*/}

      
      <div className="height"><h3 className="height_filter">Height:</h3><TextField 
          sx={{
            width: '50%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          borderRadius: '20px',
          mb: '10px'
          }}
          className="text_field"
          color="secondary"
          // id="outlined-height-end-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">inches</InputAdornment>,
          }}
          onChange={(e) => setHeight(e.target.value)}
          label="height"
        />
      </div>


 {/* DIET TYPE  -----------------------*/}

      <div className="diet">
      <FormControl  
          sx={{
            width: '50%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          borderRadius: '20px',
          mb: '10px'
          }}
          className="text_field"
          color="secondary"
          >
            <label for="Diet Type"><h3>Diet Type:</h3></label>

        <Select
        className="dropdown_menu"
          fullWidth
          onChange={(e) => setDietType(e.target.value)}
          id="diet-type-select"
          labelId="Diet-Type"
          label="Diet Type"
          value={dietType}
        >
        <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
        <MenuItem value={"keto"}>Keto</MenuItem>
        <MenuItem value={"carnivore"}>Carnivore</MenuItem>
        <MenuItem value={"vegan"}>Vegan</MenuItem>
        <MenuItem value={"paleo"}>Paleo</MenuItem>
        <MenuItem value={"low-fat"}>Low-fat</MenuItem>
        <MenuItem value={"low-carb"}>Low-carb</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
      </div>

       {/* PRIMARY WORKOUT -----------------------*/}

      <div className="primary_workout">
      <FormControl  
          sx={{
            width: '60%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          borderRadius: '20px',
          mb: '10px'
          }}
          className="text_field"
          color="secondary"
          // variant="outlined"
          >
            <label for="Primary Workout"><h3>Primary Workout:</h3></label>
        <Select 
          fullWidth
          onChange={(e) => setPrimaryWorkout(e.target.value)}
          id="primary-workout-select"
          labelId="Primary-Workout"
          label="Primary Workout"
          value={primaryWorkout}
        >
        <MenuItem value={"cardio"}>Cardio</MenuItem>
        <MenuItem value={"hiit"}>HIIT</MenuItem>
        <MenuItem value={"strength training"}>Strength Training</MenuItem>
        <MenuItem value={"yoga"}>Yoga</MenuItem>
        <MenuItem value={"calisthenics"}>Calisthenics</MenuItem>
        <MenuItem value={"aerobics"}>Aerobics</MenuItem>
        <MenuItem value={"pilates"}>Pilates</MenuItem>
        <MenuItem value={"crossfit"}>Crossfit</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
      </div>

       {/* FITNESS GOAL -----------------------*/}

      <div className="fitness_goal">
      <FormControl  
          sx={{
            width: '60%',
            mt: '-5%',
            "& .MuiInputLabel-root": {color: "rgba(0,0,0,0.00)"},
            "& .MuiOutlinedInput-root": { bgcolor: 'white', borderRadius: '20px',
            "& > fieldset": { color: 'white', borderColor: "white", borderRadius: '20px'},
          },
          borderRadius: '20px',
          mb: '10px'
          }}
          >
            <label for="Fitness Goal"><h3>Fitness Goal:</h3></label>
        <Select 
          onChange={(e) => setFitnessGoal(e.target.value)}
          id="fitness-goal-select"
          labelId="Fitness-Goal-Select"
          fullWidth
          label="Fitness Goal"
          value={fitnessGoal}
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={"weight loss"}>Weight Loss</MenuItem>
        <MenuItem value={"weight gain"}>Weight Gain</MenuItem>
        <MenuItem value={"maintain"}>Maintain</MenuItem>
        <MenuItem value={"muscle building"}>Muscle Building</MenuItem>
        <MenuItem value={"endurance"}>Endurance</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
      </div>
     
    
  </div>
    
  )
}