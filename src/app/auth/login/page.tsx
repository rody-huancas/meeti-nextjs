import { Metadata } from "next";
import Heading from "@/shared/components/typography/Heading";
import { generatePageTitle } from "@/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Login")
}

const LoginPage = () => {
  return (
    <Heading>LoginPage</Heading>
  )
}

export default LoginPage