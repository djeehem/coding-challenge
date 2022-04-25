import express from 'express';

import { getBuzzNinja } from '../controllers/ninjify.js';

const router = express.Router();
router.get('/', getBuzzNinja)

export default router;
