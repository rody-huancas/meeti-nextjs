import { Metadata } from "next";
import { generatePageTitle } from "@/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta")
}

const CreateAccountPage = () => {
  return (
    <div>CreateAccountPage</div>
  )
}

export default CreateAccountPage