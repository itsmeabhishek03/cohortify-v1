const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const channelRoute = require("./routes/channels");
const userRoute =  require("./routes/users");
const messageRoute =  require("./routes/message");


dotenv.config();

mongoose
  .connect("mongodb+srv://madi:123Adi@cohortify-db.bgofdrz.mongodb.net/cohortify?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected To DB");
    app.listen(5555, () => {
      console.log(`BACKEND PORT START`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//middlewa
app.use(express.json());
app.use(cors());

app.get( "/", (req, res)=>{
 res.send("hii")
})

//routes
const User = require("./models/User");
async function insert(){
  const user = await User.create({
    "username":"tomy",
    "email":"tony@gmal.com",
    "password":"123456"
  });
  await user.save();
  console.log(user)
}
//insert();
app.use("/api/auth/", authRoute);
app.use("/api/channel/", channelRoute);
app.use("/api/user/", userRoute);
app.use("/api/message/", messageRoute);

