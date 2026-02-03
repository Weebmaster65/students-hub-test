import { z } from 'zod'

export const createUserSchema = z.object({
     matricula: z.string().min(3),
     nombre: z.string().min(2),
     apaterno: z.string().min(2),
     materno: z.string().min(2).optional(),
     usuario: z.string().min(3),
     passwords: z.string().min(3) 
})

export const updateUserSchema = z.object({
     nombre: z.string().min(2),
     apaterno: z.string().min(2),
     materno: z.string().min(2).optional(),
     passwords: z.string().min(3), 
     activo: z.boolean().optional()
})

export const listUserSchema = z.object({
    q:z.string().optional(),
    activo: z.enum(['true','false']).optional(),
    limit: z.coerce.number().int().min(1).max(50).optional().default(20)
})