import React from "react";
import axios from "axios";
import '../styles/App.scss';
import {useState, useEffect} from 'react';
import { TextField, FormControl, MenuItem, Select, InputAdornment } from '@mui/material';
import ProfileCards from "./ProfileCards";

export default function Filters2 () {

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState("");
  console.log("loggedInUser:", loggedInUser);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user_details");
    console.log("localstorage", JSON.parse(loggedInUser),"id:", JSON.parse(loggedInUser).user.id);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setLoggedInUser(foundUser.user.id);
    }
  }, []);

  //form input values below
  const [ageRange, setAgeRange] = useState([]);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [dietType, setDietType] = useState("");
  const [primaryWorkout, setPrimaryWorkout] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
 
  useEffect(() => {
    if (ageRange || gender || height || dietType || primaryWorkout || fitnessGoal) {
      axios.post("/api/filter", {minimum_age: ageRange[0], maximum_age: ageRange[1], gender, height, dietType, primaryWorkout, fitnessGoal, cookieId: loggedInUser})
        .then((res) => { 
          console.log("***post response:", res.data.users);
          setFilteredUsers(res.data.users);
        });
    }
  }, [ageRange, gender, height, dietType, primaryWorkout, fitnessGoal]);

  return (
    <div>
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
          borderRadius: '20px',
          mb: '10px'
          }}
          >
            <label for="age"><h3>Age Range:</h3></label>
        <Select
          className="dropdown_menu"
          fullWidth
          onChange={(e) => {
            console.log((e.target.value).split(", "));
            setAgeRange((e.target.value).split(","))}
          }
          labelId="age-select-label"
          id="age-select"
          value={ageRange} //look into fixing this for the display of the form value "age"
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={""}>-</MenuItem>
        <MenuItem value={"15, 20"}>15 - 20</MenuItem>
        <MenuItem value={"20, 25"}>20 - 25</MenuItem>
        <MenuItem value={"25, 30"}>25 - 30</MenuItem>
        <MenuItem value={"30, 35"}>30 - 35</MenuItem>
        <MenuItem value={"35, 40"}>35 - 40</MenuItem>
        <MenuItem value={"40, 45"}>40 - 45</MenuItem>
        <MenuItem value={"45, 50"}>45 - 50</MenuItem>
        <MenuItem value={"50, 55"}>50 - 55</MenuItem>
        <MenuItem value={"55, 60"}>55 - 60</MenuItem>
        <MenuItem value={"60, 65"}>60 - 65</MenuItem>
        <MenuItem value={"65, 70"}>65 - 70</MenuItem>
        <MenuItem value={"70, 75"}>70 - 75</MenuItem>
        <MenuItem value={"75, 80"}>75 - 80</MenuItem>
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
          >
            <label for="gender"><h3>Gender:</h3></label>
        <Select
          className="dropdown_menu"
          fullWidth
          onChange={(e) => setGender(e.target.value)}
          labelId="gender-select-label"
          id="gender-select"
          value={gender}     
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={""}>-</MenuItem>
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
          variant="outlined"
          color="secondary"
          // id="outlined-height-end-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">inches</InputAdornment>,
          }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
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
          >
            <label for="Diet Type"><h3>Diet Type:</h3></label>

        <Select
        className="dropdown_menu"
          fullWidth
          onChange={(e) => setDietType(e.target.value)}
          id="diet-type-select"
          labelId="Diet-Type"
          value={dietType}
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={""}>-</MenuItem>
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
          >
            <label for="Primary Workout"><h3>Primary Workout:</h3></label>
        <Select 
          fullWidth
          onChange={(e) => setPrimaryWorkout(e.target.value)}
          id="primary-workout-select"
          labelId="Primary-Workout"
          value={primaryWorkout}
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={""}>-</MenuItem>
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
          value={fitnessGoal}
          variant="outlined"
          color="secondary"
        >
        <MenuItem value={""}>-</MenuItem>
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

  <div className="search_page_results_copy_container">
      {filteredUsers.length > 0 && <h2 className="search_results_text">Search Results: {filteredUsers.length}</h2> }
      </div>
    {filteredUsers && filteredUsers.map(el => {
      if (el.id !== loggedInUser) {
      return <ProfileCards key={el.id} userId={el.id} firstName={el.first_name} lastName={el.last_name} profilePic={el.profile_img_url}/>
      }
    })}

  </div>
    
  )
}