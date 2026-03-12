import { z } from "zod";

export const signUpSchema = z
	.object({
		name: z.string().min(6, "name must be 6 charectars "),
		emailAdress: z.email("Invalid email address"),
		password: z.string().min(8, "Password must be 8 charectars"),
		confirmPassword: z.string().min(8, "Incorrect password"),
		isaAcceptTerms: z.boolean(),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		error: "Incorrect Password",
		path: ["confirmPassword"],
	});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
