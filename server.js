const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/config");
require("colors");
const morgan=require("morgan");
const port=process.env.PORT || 5000;
app=express();

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

//Middleware 

app.use(express.json());
app.use(morgan("dev"));

//Routes
//app.use("/api/pizzas", require("./routes/pizzaRoute"));
//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));
// /api/orders/placeorder


app.get("/",(req,res)=>{
    res.send("<h1>Node  server is running</h1>");
})

app.listen(port,()=>{
    console.log(`Server is running on PORT ${process.env.NODE_ENV} mode on port ${port}` );
})



/////////////////////////////////


// const express = require("express");
// const dotenv = require("dotenv");
// const path = require("path");

// const connectDB = require("./config/config");
// require("colors");
// const morgan = require("morgan");

// //config dotenv
// dotenv.config();

// //connection mongodb
// connectDB();

// const app = express();

// //middlewares
// app.use(express.json());
// app.use(morgan("dev"));

// //route
// app.use("/api/pizzas", require("./routes/pizzaRoute"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/orders", require("./routes/orderRoute"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("<h1>Hello From Node Server vai nodemon</h1>");
//   });
// }

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(
//     `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
//       .bgMagenta.white
//   );
// });
