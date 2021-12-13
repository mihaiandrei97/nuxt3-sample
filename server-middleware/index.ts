import express, { Request, Response } from "express";
import api from "./api";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", api);

export default app;
