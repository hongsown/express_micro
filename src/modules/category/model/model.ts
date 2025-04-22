import { z } from "zod";
import { ModelStatus } from "../../../share/model/base-model";


export const CategorySchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    description: z.string().min(1, { message: "Description is required" }),
    image: z.string().min(1, { message: "Image is required" }),
    parentId: z.string().uuid().optional(),
    status: z.nativeEnum(ModelStatus),
    position: z.number().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type Category = z.infer<typeof CategorySchema>

export const CategoryListSchema = z.object({
    categories: z.array(CategorySchema),
})
