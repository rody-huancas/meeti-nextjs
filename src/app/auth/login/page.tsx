import Link from "next/link";
import { Metadata } from "next";
import Heading from "@/shared/components/typography/Heading";
import LoginForm from "@/features/auth/components/LoginForm";
import { generatePageTitle } from "@/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Login"),
};

const LoginPage = () => {
  return (
    <>
      <Heading>Inicio de Sesión</Heading>

      <LoginForm />

      <nav className="mt-20 flex justify-between items-center">
        <Link href="/auth/create-account" className="font-bold">
          Crear Cuenta
        </Link>

        <Link href="/auth/forgot-password" className="font-bold">
          Olvidé mi Contraseña
        </Link>
      </nav>
    </>
  );
};

export default LoginPage;
