import {useEffect, useState} from 'react';
import { Container, TextField, FormControl, InputLabel, MenuItem, Select, IconButton, OutlinedInput, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import FaceIcon from '@mui/icons-material/Face';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import BResetAll from '../components/BResetAll';
import BSaveProfile from '../components/BSaveProfile';
import "../styles/EditProfile.scss"

export default function EditProfile() {

  const navigate = useNavigate();

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
   if (password && confirmPassword && (password !== confirmPassword)) {
     setPasswordError(true);
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
      weight && dietType && primaryWorkout && aboutMe && healthTips && futureGoals
      && (password === confirmPassword)) {
      axios.put(`api/users/${id}`, { user_name: userName, first_name: firstName, last_name: lastName, email: email, password: password, profile_img_url: profileImageUrl, age: age, gender: gender, height: height, weight: weight, country: country, fitness_goal: fitnessGoal, diet_type: dietType, primary_workout: primaryWorkout, about_me: aboutMe, tips: healthTips, future_goals: futureGoals })
        .then(navigate(`/users/${id}`));
    }
  }

  return (
    <div className="background_image_container">
    <div className="form">
    <div className="outer_form_container">

    <Container size="sm" id="move">
      <form noValidate autoComplete="off" className="form_fields" id="edit-profile-form">
        <TextField
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          // width: '100%',
        }}
          className="text_field"
          value={profileImageUrl}
          onChange={(e) => setProfileImageUrl(e.target.value)}
          label="Profile Image Url" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          placeholder="Profile Image Url *"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaceIcon id="face"/>
              </InputAdornment>
            ),
          }}
          error={profileImageUrlError}
        />
        <div>
        <TextField 
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '1%'
          }}
          className="text_field"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          variant="outlined"
          color="secondary"
          required
          error={firstNameError}
        />
         <TextField 
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          ml: '1%'
          }}
          className="text_field"
          value={lastName}
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
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '1%'
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle id="account"/>
              </InputAdornment>
            ),
          }}
          className="text_field"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username *"
          label="Username"
          variant="outlined"
          color="secondary"
          required
          error={userNameError}
        />
        <TextField 
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          ml: '1%'
          }}
          className="text_field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          color="secondary"
          required
          error={emailError}
        />
        </div>
        <div>
        {/* <TextField 
          sx={{
            width: "48%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '10px'
          }}
          className="text_field"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          color="secondary"
          required
          type='password'
          error={passwordError}
        /> */}
        <FormControl 
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          mr: '1%',
          }}
          className="text_field">
        <InputLabel htmlFor="outlined-adornment-password" id="password0">Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            variant="outlined"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                id="eye1"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* <TextField 
          sx={{
            width: "48%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          ml: '10px'
          }}
          className="text_field"
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          variant="outlined"
          color="secondary"
          required
          type='password'
          error={confirmPasswordError}
        /> */}
         <FormControl 
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          ml: '1%',
          }}
          className="text_field">
        <InputLabel id="password1" htmlFor="outlined-adornment-confirm-password">Confirm Password *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={values.showPassword ? 'text' : 'password'}
            value={confirmPassword}
            variant="outlined"
            color="secondary"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                id="eye2"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        </div>
        <div>
        <TextField 
          sx={{
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            mb: '20px',
            mr: '1%',
          }}
          className="text_field"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          label="Age"
          variant="outlined"
          color="secondary"
          required
          error={ageError}
        />
        <FormControl  
          sx={{
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            ml: '1%',
            mr: '1%',
            bgcolor: '#F2EDF5',
            borderRadius: '20px'
          }}
          className=".dropdown"
          error={genderError}>
        <InputLabel id="gender-select">Gender *</InputLabel>
        <Select
          className="dropdown_menu"
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
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            ml: '1%',
            mb: '20px'
          }}
          id="outlined-height-end-adornment"
          InputProps={{
            endAdornment: <InputAdornment position="end">inches</InputAdornment>,
          }}
          className="text_field"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          label="Height"
          variant="outlined"
          color="secondary"
          required
          error={heightError}
        />
        </div>
        <div>
        <TextField 
          sx={{
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            mb: '20px',
            mr: '1%',
          }}
          className="text_field"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
          variant="outlined"
          color="secondary"
          required
          error={countryError}
        />
        <FormControl  
          sx={{
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            ml: '1%',
            mr: '1%',
            bgcolor: '#F2EDF5',
            borderRadius: '20px'
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
          id="outlined-weight-end-adornment"
          sx={{
            width: "32%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            mb: '20px',
            ml: '1%',
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
          }}
          className="text_field"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          label="Weight"
          variant="outlined"
          color="secondary"
          required
          error={weightError}
        />
        </div>
        <div>
        <FormControl  
          sx={{
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            mr: '1%',
            mb: '20px',
            bgcolor: '#F2EDF5',
            borderRadius: '20px'
          }}
          error={dietTypeError}>
        <InputLabel id="diet-type-select">Diet Type *</InputLabel>
        <Select
        startAdornment={
          <InputAdornment position="start">
            <RestaurantIcon id="cutlery"/>
          </InputAdornment>
          }
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
            width: "49%",
            "& .MuiInputLabel-root": {color: '#6A18A8'},
            "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
            },
            ml: '1%',
            mb: '20px',
            bgcolor: '#F2EDF5',
            borderRadius: '20px'
          }}
          error={primaryWorkoutError}>
        <InputLabel id="primary-workout-select">Primary Workout *</InputLabel>
        <Select 
          startAdornment={
            <InputAdornment position="start">
              <FitnessCenterIcon id="weights"/>
            </InputAdornment>
            }
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
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
        }}
          className="text_field"
          value={aboutMe}
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
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
        }}
          className="text_field"
          value={healthTips}
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
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
        }} 
          className="text_field"
          value={futureGoals}
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

        
      </form>
    </Container>
    </div>

      <div className="reset_and_save_buttons_container">
        
        <div class="reset_button">
        <BResetAll onClick={handleReset}/>
        </div>

        <div class="save_button">
        <BSaveProfile onClick={handleSubmit}/>
        </div>

      </div>

      {/* <div id="buttons_icons">
        <Button
          onClick={handleReset}
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
        </Button> */}

    </div>
    </div>
  )
}
