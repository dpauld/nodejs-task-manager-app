const mongoose = require("mongoose");
// require("dotenv").config();

const connectionString =
  "mongodb+srv://dipto:2468@nodeexpressprojects.thetp.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to databases..."))
  .catch((err) => console.log(err));
