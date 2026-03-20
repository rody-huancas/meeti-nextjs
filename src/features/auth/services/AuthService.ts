import { auth } from "@/lib/auth";
import { SignUpInput } from "../schemas/auth.schema";
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
}

export const authService = new AuthService(authRepository);
