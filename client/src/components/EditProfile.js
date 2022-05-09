import {useState} from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import axios from 'axios';
import "../styles/EditProfile.scss"

export default function EditProfile() {
  //form input values below
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [country, setCountry] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [weight, setWeight] = useState("");
  const [dietType, setDietType] = useState("");
  const [primaryWorkout, setPrimaryWorkout] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [healthTips, setHealthTips] = useState("");
  const [futureGoals, setFutureGoals] = useState("");

  //error status below for the values above
  const [profileImageUrlError, setProfileImageUrlError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [fitnessGoalError, setFitnessGoalError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [dietTypeError, setDietTypeError] = useState(false);
  const [primaryWorkoutError, setPrimaryWorkoutError] = useState(false);
  const [aboutMeError, setAboutMeError] = useState(false);
  const [healthTipsError, setHealthTipsError] = useState(false);
  const [futureGoalsError, setFutureGoalsError] = useState(false);

  //on save profile button click
  const handleSubmit = (e) => {
    e.preventDefault();

    //reseting error back to false before checks
    setProfileImageUrlError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setUserNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setAgeError(false);
    setGenderError(false);
    setHeightError(false);
    setCountryError(false);
    setFitnessGoalError(false);
    setWeightError(false);
    setDietTypeError(false);
    setPrimaryWorkoutError(false);
    setAboutMeError(false);
    setHealthTipsError(false);
    setFutureGoalsError(false);

    //checking for empty fields
   if (profileImageUrl === "") {
     setProfileImageUrlError(true);
   }
   if (firstName === "") {
    setFirstNameError(true);
   }
   if (lastName === "") {
    setLastNameError(true);
   }
   if (userName === "") {
    setUserNameError(true);
   }
   if (email === "") {
    setEmailError(true);
   }
   if (password === "") {
    setPasswordError(true);
   }
   if (confirmPassword === "") {
    setConfirmPasswordError(true);
   }
   if (age === "") {
    setAgeError(true);
   }
   if (gender === "") {
    setGenderError(true);
   }
   if (height === "") {
    setHeightError(true);
   }
   if (country === "") {
    setCountryError(true);
   }
   if (fitnessGoal === "") {
    setFitnessGoalError(true);
   }
   if (weight === "") {
    setWeightError(true);
   }
   if (email === "") {
    setEmailError(true);
   }
   if (dietType === "") {
    setDietTypeError(true);
   }
   if (primaryWorkout === "") {
    setPrimaryWorkoutError(true);
   }
   if (aboutMe === "") {
    setAboutMeError(true);
   }
   if (healthTips === "") {
    setHealthTipsError(true);
   }
   if (futureGoals === "") {
    setFutureGoalsError(true);
   }

    // const values = [profileImageUrl, firstName, lastName, userName, email, password, 
    //                 confirmPassword, age, gender, height, country, fitnessGoal,
    //                 weight, dietType, primaryWorkout, aboutMe, healthTips, futureGoals];

    if (profileImageUrl && firstName && lastName && userName && email && password && 
      confirmPassword && age && gender && height && country && fitnessGoal &&
      weight && dietType && primaryWorkout && aboutMe && healthTips && futureGoals) {
      axios.put("api/users/1", { user_name: userName, first_name: firstName, last_name: lastName, email: email, password: password, profile_img_url: profileImageUrl, age: age, gender: gender, height: height, weight: weight, country: country, fitness_goal: fitnessGoal, diet_type: dietType, primary_workout: primaryWorkout, about_me: aboutMe, tips: healthTips, future_goals: futureGoals });
    }
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Update User Profile
      </Typography>
      
      <form noValidate autoComplete="off">
        <TextField 
          onChange={(e) => setProfileImageUrl(e.target.value)}
          label="Profile Image Url" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={profileImageUrlError}
        />
        <div>
        <TextField 
          sx={{
            width: "50%"
          }}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          variant="outlined"
          color="secondary"
          required
          error={firstNameError}
        />
         <TextField 
          sx={{
            width: "50%"
          }}
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          variant="outlined"
          color="secondary"
          required
          error={lastNameError}
        />
        </div>
        <div>
        <TextField 
          sx={{
            width: "50%"
          }}
          onChange={(e) => setUserName(e.target.value)}
          label="Username"
          variant="outlined"
          color="secondary"
          required
          error={userNameError}
        />
        <TextField 
          sx={{
            width: "50%"
          }}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          color="secondary"
          required
          error={emailError}
        />
        </div>
        <div>
        <TextField 
          sx={{
            width: "50%"
          }}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          color="secondary"
          required
          error={passwordError}
        />
        <TextField 
          sx={{
          width: "50%"
          }}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          variant="outlined"
          color="secondary"
          required
          error={confirmPasswordError}
        />
        </div>
        <div>
        <TextField 
          sx={{
            width: "33%"
          }}
          onChange={(e) => setAge(e.target.value)}
          label="Age"
          variant="outlined"
          color="secondary"
          required
          error={ageError}
        />
        <FormControl  
          sx={{
            width: "34%"
          }}
          error={genderError}>
        <InputLabel id="gender-select">Gender *</InputLabel>
        <Select
          fullWidth
          onChange={(e) => setGender(e.target.value)}
          labelId="gender-select-label"
          id="gender-select"
          label="Gender*"
          value={gender}
          variant="outlined"
          color="secondary"
          required
        >
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
        <TextField 
          sx={{
            width: "33%"
          }}
          onChange={(e) => setHeight(e.target.value)}
          label="Height (in inches)"
          variant="outlined"
          color="secondary"
          required
          error={heightError}
        />
        </div>
        <div>
        <TextField 
          sx={{
            width: "33%"
          }}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
          variant="outlined"
          color="secondary"
          required
          error={countryError}
        />
        <FormControl  
          sx={{
            width: "34%"
          }}
          error={fitnessGoalError}>
        <InputLabel id="fitness-goal-select">Fitness Goal *</InputLabel>
        <Select 
          onChange={(e) => setFitnessGoal(e.target.value)}
          id="fitness-goal-select"
          labelId="Fitness-Goal-Select"
          fullWidth
          label="Fitness Goal"
          value={fitnessGoal}
          variant="outlined"
          color="secondary"
          required
        >
        <MenuItem value={"weight loss"}>Weight Loss</MenuItem>
        <MenuItem value={"weight gain"}>Weight Gain</MenuItem>
        <MenuItem value={"maintain"}>Maintain</MenuItem>
        <MenuItem value={"muscle building"}>Muscle Building</MenuItem>
        <MenuItem value={"endurance"}>Endurance</MenuItem>
        <MenuItem value={"other"}>Other</MenuItem>
        </Select>
        </FormControl>
        <TextField 
          sx={{
            width: "33%"
          }}
          onChange={(e) => setWeight(e.target.value)}
          label="Weight (in lbs)"
          variant="outlined"
          color="secondary"
          required
          error={weightError}
        />
        </div>
        <div>
        <FormControl  
          sx={{
            width: "50%"
          }}
          error={dietTypeError}>
        <InputLabel id="diet-type-select">Diet Type *</InputLabel>
        <Select
          fullWidth
          onChange={(e) => setDietType(e.target.value)}
          id="diet-type-select"
          labelId="Diet-Type"
          label="Diet Type"
          value={dietType}
          variant="outlined"
          color="secondary"
          required
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
        <FormControl  
          sx={{
            width: "50%"
          }}
          error={primaryWorkoutError}>
        <InputLabel id="primary-workout-select">Primary Workout *</InputLabel>
        <Select 
          fullWidth
          onChange={(e) => setPrimaryWorkout(e.target.value)}
          id="primary-workout-select"
          labelId="Primary-Workout"
          label="Primary Workout"
          value={primaryWorkout}
          variant="outlined"
          color="secondary"
          required
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
        <TextField 
          onChange={(e) => setAboutMe(e.target.value)}
          label="About Me"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={aboutMeError}
        />
        <TextField 
          onChange={(e) => setHealthTips(e.target.value)}
          label="Health Tips"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={healthTipsError}
        />
        <TextField 
          onChange={(e) => setFutureGoals(e.target.value)}
          label="Future Goals"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={futureGoalsError}
        />

        <div id="buttons_icons">
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<RestartAltRoundedIcon/>}
        >
          Reset All
        </Button>
        <Button
          onClick={handleSubmit}
          type="submit" 
          color="primary" 
          variant="contained"
          endIcon={<SaveRoundedIcon/>}
        >
          Save Profile
        </Button>
        </div>
      </form>

    </Container>
  )
}
