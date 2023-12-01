import { Router } from "express";
import ProblemRoute from '../problem/route/problem.route';

const router: Router = Router();

router.use('/problem', ProblemRoute)

export default router