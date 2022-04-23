import express from 'express';

import { getNinjaNames } from "../controllers/getNinjaNames.js";
import { getBuzzwords } from "../controllers/getBuzzwords.js";
import { getNinjifiedBuzzwords } from "../controllers/getNinjifiedBuzzwords.js";


// import {
//   getNinjaName
// } from "../controllers/getNinjaName";

const router = express.Router();

router.get('/ninjify', getNinjifiedBuzzwords)
router.get('/ninjaNames', getNinjaNames)
router.get('/buzzwords', getBuzzwords)
// router.get('/ninjify', getNinjaName)

router.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  })
})

export default router;
