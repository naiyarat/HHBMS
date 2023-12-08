import express from "express"
import cors from "cors"
import { connectSql } from "./db";
import Routes from "./router";

const app = express()
app.use(cors())
const port = 8000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// use express routing
app.use('/api', Routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  // get from env file
  connectSql()
})