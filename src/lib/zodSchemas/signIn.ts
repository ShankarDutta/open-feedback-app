import { z } from "zod";

export const signInSchema = z.object({
	emailAdress: z.email("Invalid email address & password"),
	password: z.string("Invalid email address & password"),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
