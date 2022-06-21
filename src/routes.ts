import { Router} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateEventController } from "./controllers/planning/event/CreateEventController";
import { CreateHabitController } from "./controllers/planning/habit/CreateHabitController";

import { isAuth } from "./middlewares/IsAuth";
import { thereIsAPlanner } from "./middlewares/thereIsAPlanner";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { CreateHabitListController } from "./controllers/habitList/CreateHabitListController";
import { CreateGoalController } from "./controllers/planning/goal/CreateGoalController";
import { CreateTaskController } from "./controllers/planning/task/CreateTaskController";
import { ListEventController } from "./controllers/planning/event/ListEventController";
import { DetailEventController } from "./controllers/planning/event/DetailEventController";
import { ListGoalController } from "./controllers/planning/goal/ListGoalController";
import { DetailGoalController } from "./controllers/planning/goal/DetailGoalController";
import { DetailHabitController } from "./controllers/planning/habit/DetailHabitController";
import { ListHabitController } from "./controllers/planning/habit/ListHabitController";
import { ListTaskController } from "./controllers/planning/task/ListTaskController";
import { DetailTaskController } from "./controllers/planning/task/DetailTaskController";
import { ListPlanningController } from "./controllers/planning/ListPlanningController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

//User Routes
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

//planning Route
router.get('/planning', isAuth, thereIsAPlanner, new ListPlanningController().handle)

//Category Routes
router.post('/category', new CreateCategoryController().handle)
router.get('/categorys', isAuth, new ListCategoryController().handle)

//Event Routes
router.post('/event', isAuth, thereIsAPlanner, new CreateEventController().handle)
router.get('/events', isAuth, thereIsAPlanner, new ListEventController().handle)
router.get('/event/detail', isAuth, thereIsAPlanner, new DetailEventController().handle)

//Habit Routes
router.post('/habit', isAuth, thereIsAPlanner, new CreateHabitController().handle)
router.get('/habits', isAuth, thereIsAPlanner, new ListHabitController().handle)
router.get('/habit/detail', isAuth, thereIsAPlanner, new DetailHabitController().handle)

//Goal Routes
router.post('/goal', isAuth, thereIsAPlanner, new CreateGoalController().handle)
router.get('/goals', isAuth, thereIsAPlanner, new ListGoalController().handle)
router.get('/goal/detail', isAuth, thereIsAPlanner, new DetailGoalController().handle)

//Task Routes
router.post('/task', isAuth, thereIsAPlanner, new CreateTaskController().handle)
router.get('/tasks', isAuth, thereIsAPlanner, new ListTaskController().handle )
router.get('/task/detail', isAuth, thereIsAPlanner, new DetailTaskController().handle )

export { router };