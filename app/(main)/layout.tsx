import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
