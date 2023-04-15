import express from 'express';
import { getAllBugs, createBug, updateBug, deleteBug, getBugById } from '../controllers/BugController.js';
import { getAllUsers, getUserById } from "../controllers/UserController.js"
import { getAllProjects, getProjectById } from "../controllers/ProjectController.js"


const router = express.Router();

// Rutas para listar bugs
router.get('/bugs', getAllBugs);
router.get('/bugs/:id', getBugById);

// Rutas para crear un nuevo bug
router.post('/bugs', createBug);

// Rutas para actualizar un bug existente
router.put('/bugs/:id', updateBug);

// Rutas para eliminar un bug existente
router.delete('/bugs/:id', deleteBug);

//Rutas para listar Usuarios
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

//Rutas listar Proyectos
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProjectById);

export default router;