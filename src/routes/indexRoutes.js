import { Router } from "express";
import controller from "../controller/controller.js";

const router=Router()

router.get("/passengers/travels/:id?",controller)


export default router