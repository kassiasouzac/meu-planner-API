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

const router = Router();

//User Routes
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

//planning Route

//Category Routes

router.post('/category', new CreateCategoryController().handle)
router.post('/habitList', new CreateHabitListController().handle)

//Event Routes
router.post('/event', isAuth, thereIsAPlanner, new CreateEventController().handle )

//Habit Routes
router.post('/habit', isAuth, thereIsAPlanner, new CreateHabitController().handle )


export { router };