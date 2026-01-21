import { Router } from "express";
import PostControl from "./controllers/PostControl.js";

const router = Router();
const postController = new PostControl();

router.post("/posts", (req, res) => postController.create(req, res));
router.get("/posts", (req, res) => postController.showAll(req, res));
router.put("/posts/:id", (req, res) => postController.update(req, res));
router.delete("/posts/:id", (req, res) => postController.destroy(req, res));

export default router;
