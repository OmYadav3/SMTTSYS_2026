import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

/* ⭐ Security Middleware */
app.use(helmet());


/* ⭐ CORS */
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
  })
);


/* ⭐ Logging Middleware */
app.use(morgan("dev"));


/* ⭐ Middlewares */
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb"  }));
app.use(express.static("public"));


/* ⭐ Routes import */
import reportRouter from "./routes/report.route.js";


/* ⭐ Routes declaration */
app.use("/api/v1/report", reportRouter);


/* ⭐ Health check */
app.get("/health", (req, res) => {
  res.send("Server running ✅");
});

export { app };