DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  user_name VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_img_url TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(25),
  height INTEGER NOT NULL,
  weight INTEGER NOT NULL,
  country VARCHAR(25) NOT NULL,
  fitness_goal VARCHAR(25) NOT NULL,
  diet_type VARCHAR(25) NOT NULL,
  primary_workout VARCHAR(25) NOT NULL,
  about_me TEXT NOT NULL,
  tips TEXT NOT NULL,
  future_goals TEXT NOT NULL
  );