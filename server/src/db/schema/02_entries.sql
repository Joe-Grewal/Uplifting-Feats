CREATE TABLE entries (
  id SERIAL PRIMARY KEY NOT NULL,
  entry_name VARCHAR(25) NOT NULL,
  my_story TEXT,
  my_workout TEXT,
  my_diet TEXT,
  posted_at TIMESTAMP NOT NULL DEFAULT NOW()
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  );