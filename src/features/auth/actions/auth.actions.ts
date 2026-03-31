"use server";

import { authService } from "../services/AuthService";
import { SignInInput, SignInSchema, SignUpInput, SignUpSchema } from "../schemas/auth.schema";

export const signUpAction = async (input: SignUpInput) => {
  const data = SignUpSchema.safeParse(input);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  const response = await authService.register(data.data);

  return response;
};


export const signInAction = async (input: SignInInput) => {
  const data = SignInSchema.safeParse(input);

  if (!data.success) {
    return {
      error: "Hubo un error",
      success: "",
    };
  }

  const response = await authService.login(data.data);

  return response;
};
