import express from "express";
import dotenv from "dotenv";
import path from "path";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";

const __dirname = path.resolve(path.dirname(""));

const app = express();
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json({ limit: "10mb" }));
// app.use(express.static(path.join(__dirname, "views/build")));
app.use(express.urlencoded({ extended: true }));
dbConnection();
const port = process.env.PORT || 8081;
app.use(router);
//error middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`APP LISTEN ON PORT ${port} :)`);
});
