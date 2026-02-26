import dotenv from "dotenv"
import { app } from "./app.js"
import { poolPromise } from "./config/db.js";

dotenv.config()

/* ⭐ Wait for DB connection before server start */
poolPromise
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch(err => {
    console.error("❌ Failed to start server due to DB", err);
  });







