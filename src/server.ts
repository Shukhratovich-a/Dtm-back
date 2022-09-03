import fs from "fs";
import path from "path";

import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from "express";
import cors from "cors";

import { HOST, PORT } from "./config.js";

import modules from "./modules/modules.js";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use(modules);

app.use(((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error.status != 500) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  fs.appendFileSync(
    path.join(process.cwd(), "src", "log.txt"),
    `${req.url}___${error.name}___${new Date(Date.now())}___${error.status}___${error.message}\n`
  );

  res.status(error.status).json({
    status: error.status,
    message: "InternalServerError",
  });

  process.exit();
}) as ErrorRequestHandler);

app.listen(PORT, (): void => console.log(HOST));
