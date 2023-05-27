import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
// import path from "path";
// import { register } from "./controllers/auth.js"
import router from "./routes/routes.js";

/** CONFIGURATION */
/** This will include all the middleware configuration
 * as well as different package configuration.
 */
dotenv.config();
const app = express();

/** Activate the body parser */
app.use(express.json());

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(cors());

/** ROUTES */
// We initialize the routes as a middleware
app.use('/', router);

/** MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology:true,
}).then (() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))


