const { Router } = require("express");
const messageControllers = require('../controllers/messageController');
const messageRouter = Router();

messageRouter.get("/", messageControllers.getMessages);

messageRouter.get("/new", messageControllers.messageCreateGet);

messageRouter.post("/new", messageControllers.messageCreatePost);

messageRouter.get("/:messageId", messageControllers.messageIdGet);


module.exports = messageRouter;