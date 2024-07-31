require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const dbConnect = require("./dbConnect");
const bookRoutes = require("./routes/books");

// connects to DB
dbConnect();

app.use(express.json());
app.use(cors());
app.use("/api", bookRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}.`));
