import { protect, admin } from '../middleware/authMiddleware.js';
import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  logoutUser
} from '../controllers/userController.js';

const router = express.Router();
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);
router.post('/logout', logoutUser);
export default router;