import { CallController } from "../controller/call.controller";
import { CallDBImpl } from "../service/call.db.impl";
import { Router } from "express";
import { CallCreationUsecaseImpl } from "../service/call.usecase.creation.impl";
import { ProblemDBImpl } from "../../problem/service/problem.db.impl";

const newCallController = new CallController(
        new CallDBImpl(),
        new CallCreationUsecaseImpl(
            new CallDBImpl(),
            new ProblemDBImpl(),
        )
    );

const router: Router = Router();

router.route('/getAll').get(newCallController.getAllCalls);
router.route('/createWithProblem').post(newCallController.createWithProblem);

export default router;