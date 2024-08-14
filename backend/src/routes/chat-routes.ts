import { Router } from "express";
import { verifyToken } from "../utils/tokens-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controllers.js";
import { sendChatsToUser } from "../controllers/chat-controllers.js";

// protected api
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);

export default chatRoutes;
