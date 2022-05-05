// load .env data into process.env
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const { Pool } = require("pg");
const dbParams = require("./src/lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.get("/", async (req, res) => {
  const newUser = await db.query(
    `INSERT INTO users (user_name, first_name, last_name, email, password, profile_img_url, age, gender, height, weight, country, fitness_goal, diet_type, primary_workout, about_me, tips, future_goals)
      VALUES('Joe_Grewal', 'Joe', 'Grewal', 'grewaljoe20@gmail.com', 'password', 
      'https://media.istockphoto.com/photos/profile-view-of-athletic-man-drinking-water-in-a-gyms-locker-room-picture-id1217959406?k=20&m=1217959406&s=612x612&w=0&h=NwAcniqba_a-osIDLutKCaqjrXHfOT2qMi5qcDCRdrY=',
      28, 'Male', 71, 200, 'Canada', 'Weight Gain', 'Carnivore', 'Strength Training', 'I will update this info later', 'I will update this info later', 'I will update this info later') RETURNING *;`
);

  res.send(newUser.rows[0]);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});