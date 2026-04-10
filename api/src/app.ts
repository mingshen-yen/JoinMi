import "#db";
import express from "express";
import cors from "cors";
import { tourRoutes } from "#routes";

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.WEB_URL,
    credentials: true,
    exposedHeaders: ["WWW-Authenticate"],
  }),
);
app.use(express.json());

app.route("/").get((req, res) => {
  res.json("Hello World");
});

app.use("/tours", tourRoutes);

app.use("*splat", (req, res) => {
  throw new Error("Not found", { cause: { status: 404 } });
});

app.listen(port, () =>
  console.log(`Server is running on port http://localhost:${port}`),
);
