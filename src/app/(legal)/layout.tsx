import GovTopBar from "@/components/GovTopBar";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

/**
 * Shared layout for all legal/compliance pages:
 * /privacy-policy, /terms-of-use, /rti, /accessibility
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GovTopBar />
      <LegalHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

