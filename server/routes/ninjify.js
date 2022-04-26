import express from 'express';

// import { getBuzzNinja } from '../controllers/ninjify.js';
import { getBuzzwords } from '../controllers/getBuzzwords.js';

const router = express.Router();
// router.get('/', getBuzzNinja)
router.get('/list', getBuzzwords)

export default router;
