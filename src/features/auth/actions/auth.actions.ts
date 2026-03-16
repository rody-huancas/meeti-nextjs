"use server";

import { SignUpInput, SignUpSchema } from "../schemas/auth.schema";
import { authService } from "../services/AuthService";

export const signUpAction = async (input: SignUpInput) => {
  const data = SignUpSchema.safeParse(input);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  await authService.register(data.data);
};
