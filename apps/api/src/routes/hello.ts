import { Router } from "express";
import { getHello } from "src/controllers/hello";

const router = Router({ mergeParams: true });

router.post("/", getHello);

export = router;
