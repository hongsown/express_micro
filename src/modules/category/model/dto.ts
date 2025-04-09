import { z } from "zod";
import { CategoryStatus } from "./model";

export const CategoryCreateSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    description: z.string().min(1, { message: "Description is required" }).optional(),
    image: z.string().min(1, { message: "Image is required" }).optional(),
    parentId: z.string().uuid().optional(),
})

export type CategoryCreateDto = z.infer<typeof CategoryCreateSchema>

export const CategoryUpdateSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }).optional(),
    description: z.string().min(1, { message: "Description is required" }).optional(),
    image: z.string().min(1, { message: "Image is required" }).optional(),
    parentId: z.string().uuid().optional(),
    status: z.nativeEnum(CategoryStatus).optional(),
})

export type CategoryUpdateDto = z.infer<typeof CategoryUpdateSchema>