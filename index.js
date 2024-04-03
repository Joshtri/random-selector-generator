import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import mainRoute from './routes/main.js';
import selectionRoute from './routes/selection.js';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT;


app.use(express.static(__dirname + "/public"));


app.set('view engine', 'ejs');
app.use('/',mainRoute, selectionRoute)


app.listen(PORT, ()=>{
    console.log(`server run on PORT ${PORT}`);
});