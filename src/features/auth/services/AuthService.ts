import { headers } from "next/headers";
import { APIError } from "better-auth";
import { auth } from "@/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/auth.schema";
import { authRepository, IAuthRepository } from "./AuthRepository";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    // Revisar si el usuario existe
    const user = await this.authRepository.userExists(email);

    if (user) {
      return {
        error: "Este E-mail ya está registrado",
        success: "",
      };
    }

    // Manejar registro
    await auth.api.signUpEmail({
      body: { name, email, password },
    });

    return {
      error: "",
      success: "Cuenta creada correctamente, revisa tu E-mail.",
    };
  }

  async login(credentials: SignInInput) {
    const { email, password } = credentials;
    
    // Revisar si el usuario existe
    const user = await this.authRepository.userExists(email);

    if (!user) {
      return {
        error: "Este usuario no existe.",
        success: "",
      };
    }

    // Verificar la contraseña y si confirma su cuenta

    try {
      await auth.api.signInEmail({
        body: {
          email,
          password,
          callbackURL: "/dashboard"
        },
        headers: await headers()
      });

      return {
        error: "",
        success: "Inicio de sesión exitoso.",
      }
    } catch (error) {
      if (error instanceof APIError) {
        const messages: Record<number, string> = {
          401: "Contraseña incorrecta.",
        };

        const errorMessage = messages[error.statusCode] || "Hubo un error al iniciar sesión.";
        if (errorMessage) {
          return {
            error: errorMessage,
            success: "",
          };
        }
      } 
      
      return {
        error: "",
        success: "",
      };
    }
  }
}

export const authService = new AuthService(authRepository);
