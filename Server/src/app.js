import express from "express";
import cors from "cors";

const app = express();

/* ⭐ CORS */
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
);

/* ⭐ Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

/* ⭐ Routes import */
import authRouter from "./routes/auth.route.js";
import transactionRouter from "./routes/transaction.route.js";

/* ⭐ Routes declaration */
app.use("/api/v1/users", authRouter);
app.use("/api/v1/transactions", transactionRouter);

/* ⭐ Health check */
app.get("/health", (req, res) => {
  res.send("Server running ✅");
});

export { app };