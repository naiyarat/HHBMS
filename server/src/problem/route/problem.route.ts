import { ProblemController } from "../controller/problem.controller";
import { ProblemDBImpl } from "../service/problem.db.impl";
import { Router } from "express";

const newProblemController = new ProblemController(new ProblemDBImpl());

const router: Router = Router();

router.route('/getAll').get(newProblemController.getAllProblems)

export default router;