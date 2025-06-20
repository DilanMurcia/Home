  import { Router } from "express";
  import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../../../../backend/interfaces/controllers/task.controller.mjs';
  import { auth } from "../middlewares/auth.middleware.mjs";
  import { validateSchema } from "../middlewares/validator.middleware.mjs";
  import { createTaskSchema } from "../../../../backend/shared/schemas/task.schema.mjs";

  const router = Router();

  router.get("/tasks", auth, getTasks);

  router.post("/tasks", auth, validateSchema(createTaskSchema), createTask);

  router.get("/tasks/:id", auth, getTask);

  router.put("/tasks/:id", auth, updateTask);

  router.delete("/tasks/:id", auth, deleteTask);

  export default router;