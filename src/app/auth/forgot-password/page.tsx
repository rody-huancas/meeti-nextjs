import { Metadata } from "next";
import Heading from "@/shared/components/typography/Heading";
import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import { generatePageTitle } from "@/shared/utils/metadata";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Reestablecer Contraseña"),
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Heading>Recuperar tu acceso a Meeti</Heading>

      <ForgotPasswordForm />

      <nav className="mt-20 flex justify-between items-center">
        <Link href="/auth/login" className="font-bold">
          Iniciar Sesión
        </Link>

        <Link href="/auth/create-account" className="font-bold">
          Crear Cuenta
        </Link>
      </nav>
    </>
  );
};

export default ForgotPasswordPage;
