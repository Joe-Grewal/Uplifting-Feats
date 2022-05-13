import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

export default function BResetAll () {

  useEffect(() => {
    const getProfileInfo = async () => {
      try {
        let response = await axios.get("/api/myprofile");
        // console.log(response);
        setId(response.data.user.id);
        setProfileImageUrl(response.data.user.profile_img_url);
        setFirstName(response.data.user.first_name);
        setLastName(response.data.user.last_name);
        setUserName(response.data.user.user_name);
        setEmail(response.data.user.email);
        setPassword(response.data.user.password);
        setConfirmPassword(response.data.user.password);
        setAge(response.data.user.age);
        setFitnessGoal(response.data.user.fitness_goal);
        setGender(response.data.user.gender);
        setHeight(response.data.user.height);
        setCountry(response.data.user.country);
        setDietType(response.data.user.diet_type);
        setPrimaryWorkout(response.data.user.primary_workout);
        setWeight(response.data.user.weight);
        setAboutMe(response.data.user.about_me);
        setHealthTips(response.data.user.tips);
        setFutureGoals(response.data.user.future_goals);
      } catch (error) {
        console.log(error);
      }
    };
    getProfileInfo()
  }, [])

  const [values, setValues] = useState({
    password: '',
    weight: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //form input values below
  const [id, setId] = useState("");
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

  //on reset all button click
  const handleReset = (e) => {
    e.preventDefault();

    //reseting error back to false before clearing all fields
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

    //empty all fields by grabbing form id and setting menu values to null
    document.getElementById("edit-profile-form").reset(); 
    setProfileImageUrl("");
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setAge("");
    setHeight("");
    setGender("");
    setCountry("");
    setWeight("");
    setFitnessGoal("");
    setDietType("");
    setPrimaryWorkout("");
    setPassword("");
    setConfirmPassword("");
    setAboutMe("");
    setHealthTips("");
    setFutureGoals("");
  }
  const theme = createTheme ({
    typography: {
      fontFamily: [
        'Quicksand', 'sans-serif',
      ].join(','),
      fontSize: 22,
      fontWeightMedium:700,
    },
    palette: {
      primary: {
        main: '#6A18A8'
      }
    },
    shape: {
      borderRadius: 20
    },
    shadows: {
      0: "none"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleReset}
          type="submit"
      variant="contained">
        RESET ALL
    </Button>
  </ThemeProvider>
  )
}