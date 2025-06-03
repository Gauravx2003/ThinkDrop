import {z} from 'zod';

export const formSchema = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(200),
    Category: z.string().min(2).max(20),
    link: z.string().url(),

    pitch: z.string().min(10),
})