import app from './app.js';
import dotenv from 'dotenv';
import db from './config/db.js';


dotenv.config();

const PORT = process.env.PORT || 5000;


db.connect()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB Error:", err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});