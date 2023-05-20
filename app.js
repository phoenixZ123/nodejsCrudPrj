
// import express from 'express'
// import router from './router';
// import engine from 'express-edge';
// const app = express();

// app.use(engine)
// app.set('views', `${__dirname}/page`)


// app.use(router)


// app.listen(3112, () => {
//     console.log('running..server');
// })

import express from "express";
import engine from 'express-edge'
import router from "./router";
import fileUpload from 'express-fileupload';
const app = express();

//setup upload init
// app.use(fileUpload());

//express body parser.


const port = 3000;
app.use(engine)
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }))
app.set('views', `${__dirname}/page`)

app.use(router)
app.listen(port, () => {
    console.log(`this server is running on port ${port}`);
})