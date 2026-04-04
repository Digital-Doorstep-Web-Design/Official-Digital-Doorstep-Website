import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

type Props = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Navbar />

      <main>
        {/* Dark header */}
        <div
          className="pt-36 pb-14 px-5 sm:px-8 lg:px-10"
          style={{ background: "#151238" }}
        >
          <div className="max-w-3xl mx-auto">
            <p
              className="eyebrow mb-3"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              {title}
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              Last updated {lastUpdated}
            </p>
          </div>
        </div>

        {/* Prose content */}
        <div className="bg-white py-16 px-5 sm:px-8 lg:px-10">
          <div className="legal-prose max-w-3xl mx-auto">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
