import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Olá mundo! Tudo bem?");
});
app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});
app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.resolve(__dirname, "../../front-end/dist/assets")));

app.get("*", async (request, response) => {
  response.sendFile(path.resovle(__dirname, "../../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`O servidor está ouvindo a porta ${PORT}`);
});
