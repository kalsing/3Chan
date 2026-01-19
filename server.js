import express from "express";
import sequelize from "./database.js";
import User from "./User.js";
import Post from "./Post.js";

User.hasMany(Post);
Post.belongsTo(User);
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

app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      UserId: req.body.userId
    });

    res.json(post);
  } catch (error) {
    res.send(error);
  }
});



app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


async function startServer() {
    try {
        await sequelize.sync();
        console.log("banco inicializado");

        app.listen(3000, () => {
            console.log("servidor na porta 3000");
        });
    } catch (error) {
        console.error("erro", error);
    }
}

startServer();