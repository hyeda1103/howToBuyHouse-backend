import express from 'express';

import {
  createComment,
  fetchAllComment,
  fetchSingleComment,
} from '../controllers/comment';
import authMiddleware from '../middlewares/auth';

const commentRoutes = express.Router();

commentRoutes.post('/', authMiddleware, createComment);
commentRoutes.get('/', authMiddleware, fetchAllComment);
commentRoutes.get('/:id', authMiddleware, fetchSingleComment);

export default commentRoutes;
