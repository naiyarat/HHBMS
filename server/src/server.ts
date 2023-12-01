import express from "express"
import cors from "cors"
import { connectSql } from "./db";
import Routes from "./router";

const app = express()
app.use(cors())
const port = 8000

// GET API TODO LIST:  get all calls, get all problems, get all specialist
// POST API TODO LIST: create new call + problem (usecase), assign specialist subcat,
// PATCH API TODO LIST: update problem subcat, update problem's solution

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

// use express routing
app.use('/api', Routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  // get from env file
  connectSql()
})