import { SignUpInput } from "../schemas/auth.schema";

class AuthService {
  async register(credentials: SignUpInput) {
    const { name, email, password } = credentials;

    // Revisar si el usuario existe

    // Validación de negocio

    // Manejar registro
  }
}

export const authService = new AuthService();
