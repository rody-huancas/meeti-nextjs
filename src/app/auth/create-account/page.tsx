import Link from "next/link";
import { Metadata } from "next";
import Heading from "@/shared/components/typography/Heading";
import RegisterForm from "@/features/components/RegisterForm";
import { generatePageTitle } from "@/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),
};

const CreateAccountPage = () => {
  return (
    <>
      <Heading>Crear Cuenta</Heading>

      <RegisterForm />

      <nav className="mt-20 flex justify-between items-center">
        <Link href="/auth/login" className="font-bold">
          Iniciar Sesión
        </Link>

        <Link href="/auth/forgot-password" className="font-bold">
          Olvidé mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default CreateAccountPage;
