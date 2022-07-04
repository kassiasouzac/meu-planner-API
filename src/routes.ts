import { Router} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
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
import { DetailCategoryController } from "./controllers/category/DetailCategoryController";
import { ListHabitListController } from "./controllers/habitList/ListHabitListController";
import { UpdateEventController } from "./controllers/planning/event/UpdateEventController";
import { RemoveEventController } from "./controllers/planning/event/RemoveEventController";
import { UpdateHabitController } from "./controllers/planning/habit/UpdateHabitController";
import { UpdateGoalController } from "./controllers/planning/goal/UpdateGoalController";
import { UpdateTaskController } from "./controllers/planning/task/UpdateTaskController";
import { RemoveHabitController } from "./controllers/planning/habit/RemoveHabitController";
import { RemoveGoalController } from "./controllers/planning/goal/RemoveGoalController";
import { RemoveTaskController } from "./controllers/planning/task/RemoveTaskController";
import { CreateStepController } from "./controllers/planning/goal/step/CreateStepController";
import { ListStepController } from "./controllers/planning/goal/step/ListStepController";
import { RemoveAllStepsController } from "./controllers/planning/goal/step/RemoveAllStepsController";
import { UpdateFrequencyController } from "./controllers/planning/habit/UpdateFrequencyController";
import { CreateContactController } from "./controllers/contact/CreateContactController";
import { ListContactService } from "./services/contact/ListContactsService";
import { ListContactController } from "./controllers/contact/ListContactController";
import { UpdateContactController } from "./controllers/contact/UpdateContactController";
import { RemoveContactController } from "./controllers/contact/RemoveContactController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { ResetPasswordController } from "./controllers/user/ResetPasswordController";
import { CheckPasswordController } from "./controllers/user/CheckPasswordController";
import { UpdatePasswordController } from "./controllers/user/UpdatePasswordController";

const router = Router();

//User Routes
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.put('/user/edit', isAuth, new UpdateUserController().handle)
router.delete('/user/remove', isAuth, new RemoveUserController().handle)
router.post('/recovery', new ResetPasswordController().handle )
router.post('/check', isAuth, new CheckPasswordController().handle )
router.put('/update/password', isAuth, new UpdatePasswordController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

//planning Route
router.get('/planning', isAuth, thereIsAPlanner, new ListPlanningController().handle)

//Category Routes
router.post('/category', new CreateCategoryController().handle)
router.get('/categorys', isAuth, new ListCategoryController().handle)
router.get('/category/detail', isAuth, new DetailCategoryController().handle)

//Event Routes
router.post('/event', isAuth, thereIsAPlanner, new CreateEventController().handle)
router.get('/events', isAuth, thereIsAPlanner, new ListEventController().handle)
router.get('/event/detail', isAuth, thereIsAPlanner, new DetailEventController().handle)
router.put('/event/edit', isAuth, thereIsAPlanner, new UpdateEventController().handle)
router.delete('/event/remove', isAuth, new RemoveEventController().handle)

//Habit Routes
router.post('/habit', isAuth, thereIsAPlanner, new CreateHabitController().handle)
router.get('/habits', isAuth, thereIsAPlanner, new ListHabitController().handle)
router.get('/habit/detail', isAuth, thereIsAPlanner, new DetailHabitController().handle)
router.post('/habitList', new CreateHabitListController().handle)
router.get('/habitsList', new ListHabitListController().handle)
router.put('/habit/edit', isAuth, thereIsAPlanner, new UpdateHabitController().handle)
router.delete('/habit/remove', isAuth, new RemoveHabitController().handle)
router.put('/habit/frequency', isAuth, new UpdateFrequencyController().handle)

//Goal Routes
router.post('/goal', isAuth, thereIsAPlanner, new CreateGoalController().handle)
router.get('/goals', isAuth, thereIsAPlanner, new ListGoalController().handle)
router.get('/goal/detail', isAuth, thereIsAPlanner, new DetailGoalController().handle)
router.put('/goal/edit', isAuth, thereIsAPlanner, new UpdateGoalController().handle)
router.delete('/goal/remove', isAuth, new RemoveGoalController().handle)

//Step Routes
router.post('/step', isAuth, thereIsAPlanner, new CreateStepController().handle)
router.get('/steps', isAuth, thereIsAPlanner, new ListStepController().handle)
router.delete('/steps/remove', isAuth, new RemoveAllStepsController().handle)


//Task Routes
router.post('/task', isAuth, thereIsAPlanner, new CreateTaskController().handle)
router.get('/tasks', isAuth, thereIsAPlanner, new ListTaskController().handle )
router.get('/task/detail', isAuth, thereIsAPlanner, new DetailTaskController().handle )
router.put('/task/edit', isAuth, thereIsAPlanner, new UpdateTaskController().handle)
router.delete('/task/remove', isAuth, new RemoveTaskController().handle)

//contact
router.post('/contact', isAuth, new CreateContactController().handle)
router.get('/contacts', isAuth, new ListContactController().handle)
router.delete('/contact/remove', isAuth, new RemoveContactController().handle)
router.put('/contact/edit', isAuth, new UpdateContactController().handle)

export { router };