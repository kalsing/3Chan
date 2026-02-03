import express from "express";
import sequelize from "./database.js";
import User from "./tables/User.js";
import Post from "./tables/Post.js";
import PostControl from "./controllers/PostControl.js";
import router from "./routes.js";
import Like from "./tables/Like.js";
import cors from "cors";


User.hasMany(Post, { foreignKey: 'userId'});
Post.belongsTo(User, { foreignKey: 'userId'});


Like.belongsTo(User, { foreignKey: 'userId' });
Like.belongsTo(Post, { foreignKey: 'postId' });
User.hasMany(Like, { foreignKey: 'userId' });
Post.hasMany(Like, { foreignKey: 'postId' });

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


async function startServer() {
    try {
        await sequelize.sync( {force: true} );
        console.log("banco inicializado");

        app.listen(3000, () => {
            console.log("servidor na porta 3000");
        });
    } catch (error) {
        console.error("erro", error);
    }
}

startServer();