import express, { json } from "express";
import httpStatus from "http-status";
import router from "./routes/indexRoutes.js";
import { errorHandler } from "./middleware/error.middleware.js";


const app = express();
app.use(json())
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})