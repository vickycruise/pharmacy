import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";
import apiRouter from './routes/api.js'
import fs from 'fs';
import cron from 'node-cron';
import { promises as fsPromises } from 'fs';

import cookieSession from "cookie-session";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
app.use(express.json());
const publicDir = join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
app.use('/public', express.static(publicDir));

cron.schedule('*/5 * * * *', async () => {
  console.log('Running cron job to delete old files...');
  const files = await fsPromises.readdir(publicDir);
  const now = Date.now();
  for (const file of files) {
    const filePath = join(publicDir, file);
    const stats = await fsPromises.stat(filePath);
    const fileAge = (now - stats.mtimeMs) / 1000; // in seconds

    if (fileAge > 600) { // 600 seconds = 10 minutes
      try {
        await fsPromises.unlink(filePath);
        console.log(`Deleted old file: ${filePath}`);
      } catch (err) {
        console.error(`Failed to delete file: ${filePath}`, err);
      }
    }
  }
});

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use("/api", apiRouter);

app.use(function (req, res, next) {

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "content-type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "DELETE,PATCH");

  next();
});


app.listen(3006, (req, res) => {
  console.log("Operation port 3006 port is running");
});
