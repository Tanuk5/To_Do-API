console.log("hello tanu");
console.log("how are you");

const express = require('express');
const dotenv = require("dotenv");
const todoRoutes = require('./routes/todo');

const app = express();
dotenv.config();
const PORT = process.env.PORT;


app.use(express.json());  //we can also use body-parser
app.use('./todo', todoRoutes);

app.get('/', (req,res)=> res.json({'message':'your server is running'}));
app.listen(PORT, () => console.log (`server started at ${PORT}`));

