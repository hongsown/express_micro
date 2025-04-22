import { z } from "zod";
import { ModelStatus } from "../../../share/model/base-model";


export const CategoryCreateSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    description: z.string().min(1, { message: "Description is required" }).optional(),
    image: z.string().min(1, { message: "Image is required" }).optional(),
    parentId: z.string().uuid().optional(),
})

export type CategoryCreateDto = z.infer<typeof CategoryCreateSchema>

export const CategoryUpdateSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
    description: z.string().min(1, { message: "Description is required" }).optional(),
    image: z.string().min(1, { message: "Image is required" }).optional(),
    parentId: z.string().uuid().optional(),
    status: z.nativeEnum(ModelStatus).optional(),
})

export type CategoryUpdateDto = z.infer<typeof CategoryUpdateSchema>

export const CategoryCondDTOSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }).optional(),
    parentId: z.string().uuid().optional(),
    status: z.nativeEnum(ModelStatus).optional(),
})

export type CategoryCondDTO = z.infer<typeof CategoryCondDTOSchema>
