import { Router } from "express";
import PostControl from "./controllers/PostControl.js";
import UserControl from "./controllers/UserControl.js";
import LikeControl from "./controllers/LikeControl.js";
import LoginControl from "./controllers/LoginControl.js";
import { Middleware } from "./controllers/Middleware.js";

const router = Router();
const postController = new PostControl();
const userController = new UserControl();
const likeController = new LikeControl();
const loginController = new LoginControl();

router.post("/posts", Middleware, (req, res) => postController.create(req, res));
router.get("/posts", Middleware, (req, res) => postController.showAll(req, res));
router.put("/posts/:id", Middleware, (req, res) => postController.update(req, res));
router.delete("/posts/:id", Middleware, (req, res) => postController.destroy(req, res));

router.post("/users", (req, res) => userController.createUser(req, res));
router.get("/users", Middleware, (req, res) => userController.showAllUsers(req, res));
router.put("/users/:id", Middleware, (req, res) => userController.updateUser(req, res));
router.delete("/users/:id", Middleware, (req, res) => userController.destroyUser(req, res));

router.post("/likes", Middleware, (req, res) => likeController.like(req, res));
router.get("/posts/:postId/likes", Middleware, (req, res) => likeController.likeCounter(req, res));

router.post("/login", (req, res) => loginController.loginUser(req, res)); 

export default router;