import express from "express";
import "express-async-errors";
import { Request, Response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

require("dotenv").config();

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is runing at the port ${process.env.PORT}...`)
);
