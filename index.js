import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// app.get('/',(req,res) => {
//     res.send("Hello Babel")
// })

app.listen(4004,() => {
    console.log(`app is listening to port 4004`);
})