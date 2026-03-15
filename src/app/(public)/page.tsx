import { Metadata } from "next";
import Hero from "@/shared/components/ui/Hero";
import { generatePageTitle } from "@/shared/utils/metadata";

export const metadata: Metadata = {
  title: generatePageTitle("Inicio"),
};

const HomePage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
