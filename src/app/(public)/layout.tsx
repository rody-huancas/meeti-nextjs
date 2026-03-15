import Header from "@/shared/components/ui/Header";

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default AppLayout;
