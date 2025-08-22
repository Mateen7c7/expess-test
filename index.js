import serverless from "serverless-http";
import app from "./server.js";

console.log("Running Serverless Function");

export const handler = serverless(app);
