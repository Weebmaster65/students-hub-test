import { Router } from 'express'
import { requireAuth}from'../../middleware/auth.middleware.js'
import * as Ctrl from './users.controller.js'

export const userRoutes= Router()
userRoutes.use(requireAuth)


userRoutes.get('/',Ctrl.list)
userRoutes.post('/',Ctrl.create)
userRoutes.get('/:id',Ctrl.getById)
userRoutes.patch('/:id',Ctrl.update)
userRoutes.delete('/:id',Ctrl.remove)