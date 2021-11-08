import express, { json } from "express";
import cors from "cors";
import { priceRouter } from "./routes/price.routes";

const app = express();

app.use(cors());
app.use(json());
app.use(priceRouter);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server is running at 3333!");
});
