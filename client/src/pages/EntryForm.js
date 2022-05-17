import { useState } from "react";
import { Container, TextField, InputAdornment, IconButton } from "@mui/material";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BResetAll from '../components/BResetAll';
import BSaveProfile from '../components/BSaveProfile';
import "../styles/CreateEntryForm.scss"
import "../styles/EditProfile.scss"

export default function CreateEntryForm() {
  const navigate = useNavigate();

  //form input values below
  const [entryName, setEntryName] = useState("");
  const [myStory, setMyStory] = useState("");
  const [myWorkoutRoutine, setMyWorkoutRoutine] = useState("");
  const [inputFields, setInputFields] = useState([
    { my_diet: "" },
  ]);

  //error status below for values above
  const [entryNameError, setEntryNameError] = useState(false);
  const [myStoryError, setMyStoryError] = useState(false);
  const [myWorkoutRoutineError, setMyWorkoutRoutineError] = useState(false);
  const [inputFieldsError, setInputFieldsError] = useState(false);

  //on reset all button click
  const handleReset = (e) => {
    e.preventDefault();
    setEntryNameError(false);
    setMyStoryError(false);
    setMyWorkoutRoutineError(false);
    setInputFieldsError(false);

    //empty all fields by grabbing form id and setting menu values to null
    document.getElementById("create-entry-form").reset(); 
    setEntryName("");
    setMyStory("");
    setMyWorkoutRoutine("");
    setInputFields([
      { my_diet: "" },
    ]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //reseting error back to false before checks
    setEntryNameError(false);
    setMyStoryError(false);
    setMyWorkoutRoutineError(false);
    setInputFieldsError(false);

    //checking for empty fields
    if (entryName === "") {
      setEntryNameError(true);
    }
    if (myStory === "") {
      setMyStoryError(true);
    }
    if (myWorkoutRoutine === "") {
      setMyWorkoutRoutineError(true);
    }
    inputFields.forEach((el, i) => {
      if (el.my_diet === "") {
        setInputFieldsError(true);
      }
    })
    console.log("InputFields", inputFields);

    const values = function () {
      let string = "";
      inputFields.forEach((el) => {
        string += `${el.my_diet}, `
      })
      return string;
    }
    console.log(values())

    if (entryName && myStory && myWorkoutRoutine && !inputFieldsError) {
      axios.post("api/entries", {entry_name: entryName, my_story: myStory, my_workout: myWorkoutRoutine, 
        my_diet: values()})
        .then(navigate("/My_Profile"))
    }
  };

  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { my_diet: "" }])
  }

  const handleRemoveFields = index => {
    const list = [...inputFields];
    list.splice(index, 1);
    setInputFields(list);
  }

  return (
    <div className="background_image_container">
    <div className="form">
    <div className="outer_form_container">
      <Container size="sm" id="move2">
      <form noValidate autoComplete="off" className="entry_fields" id="create-entry-form">
      <TextField
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px'
        }}
          className="text_field"
          onChange={(e) => setEntryName(e.target.value)}
          label="Entry Name" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          placeholder="Entry Name *"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AutoStoriesIcon id="book"/>
              </InputAdornment>
            ),
          }}
          error={entryNameError}
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
          onChange={(e) => setMyStory(e.target.value)}
          label="My Story"
          variant="outlined"
          color="secondary"
          placeholder="(Share a recent update or story on your health journey here.
                       Include any challenges, successes, and pro-tips you've encountered on the way.)"
          multiline
          rows={10}
          fullWidth
          required
          error={myStoryError}
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
          onChange={(e) => setMyWorkoutRoutine(e.target.value)}
          label="My Workout Routine"
          variant="outlined"
          color="secondary"
          placeholder="(Share your most recent and awesome workout regimen!
                       Eg.number of days, types of exercises, sets, reps, duration, and etc.)"
          multiline
          rows={6}
          fullWidth
          required
          error={myWorkoutRoutineError}
        />
        { inputFields.map((x, i) => (
          <div key={i}>
        <TextField
        sx={{
          "& .MuiInputLabel-root": {color: '#6A18A8'},
          "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderColor: "#6A18A8", borderRadius: '20px'},
          },
          mb: '20px',
          width: "50%"
        }}
          value={x.my_diet}
          className="text_field"
          onChange={e => handleChangeInput(e, i)}
          label="Food Item" 
          name="my_diet"
          variant="outlined" 
          color="secondary" 
          placeholder="Food Item *"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RestaurantMenuRoundedIcon id="resto"/>
              </InputAdornment>
            ),
          }}
          error={inputFieldsError}
        />
        <IconButton 
          disabled={inputFields.length === 1} 
          onClick={() => handleRemoveFields(i)}>
          <RemoveRoundedIcon id="minus"/>
        </IconButton>
        <IconButton
          onClick={handleAddFields}>
          <AddRoundedIcon id="add"/>
        </IconButton>
          </div>
        )) }
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
          Save Entry
        </Button>
      </div> */}
    </div>
    </div>
  );
}