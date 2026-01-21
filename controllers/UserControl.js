import express from "express";
import sequelize from "../database.js";



const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.send(error)
    }
});



app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.send(error)
  }
})