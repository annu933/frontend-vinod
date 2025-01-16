import Image from "next/image";
import Contact from "./contact/page";
import Service from "./services/page";
import RootLayout from "./contact/layout";
import Footer from "@/components/footer/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="min-h-screen antialiased bg-grid-white/[0.02]">
      <h1 className="2xl text-center">Vinod- Mehta</h1>
      <About />
      <Service />
      <RootLayout className="bg-white">
        <Contact />
      </RootLayout>
      <Footer />
    </div>
  );
}
