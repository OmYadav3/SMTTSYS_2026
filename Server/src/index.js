import dotenv from "dotenv"
import { app } from "./app.js"
import { connectDB } from "./config/db.js";

dotenv.config()

app.listen(process.env.PORT || 5000, async () => {
   console.log(`Serving is running at port ${process.env.PORT}`);
   try {
      await connectDB();

   } catch (error) {
      console.log('Failed to intialize the database ', error);
      
   }

} )








