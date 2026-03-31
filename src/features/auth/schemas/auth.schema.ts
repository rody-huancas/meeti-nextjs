import z, { email } from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().min(1, { error: "El nombre es obligatorio" }),
  email: z.email({ error: "El E-mail no es válido" }),
  password: z
    .string()
    .min(8, { error: "La contraseña debe tener mínimo 8 caracteres" }),
  passwordConfirmation: z
    .string()
    .min(1, { error: "La contraseña de confirmación no puede ir vacío" }),
});

export const SignInSchema = BaseAuthSchema.pick({
  email: true,
}).extend({
  password: z
    .string()
    .min(1, { error: "La contraseña no debe ir vacío." }),
})

export const SignUpSchema = BaseAuthSchema.pick({
  name                : true,
  email               : true,
  password            : true,
  passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
  error: "Las contraseñas no son iguales",
  path : ["passwordConfirmation"],
});

export type SignInInput = z.infer<typeof SignInSchema>;
export type SignUpInput = z.infer<typeof SignUpSchema>;
