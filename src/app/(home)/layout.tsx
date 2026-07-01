import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}
