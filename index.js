// console.log("hello tanu");
// console.log("how are you");
// console.log("I know you are not fine buddy");
const express = require('express');
const app = express();
const PORT = 8880;

app.use(express.json());  //we can also use body-parser

app.get('/', (req,res)=> res.json({'message':'your server is running '}));
app.listen(PORT, () => console.log (`server started at ${PORT}`));

