import Image from "next/image";
import Contact from "./contact/page";
import Service from "./services/page";
import RootLayout from "./contact/layout";
import Footer from "@/components/footer/page";
import About from "./about/page";
import Hero from "./hero/page";
import ServiceLayout from "./services/layout";
import Banner from "./banner/page";

export default function Home() {
  return (
    <div className="min-h-screen antialiased bg-grid-white/[0.02]">
      <div className="relative">
        <Hero />
        <div className=" flex justify-center items-center  ">
          <Banner />
        </div>
      </div>

      <About className="bg-[#f3f3f3]" />
      <ServiceLayout className="bg-[#0F172B]">
        <Service />
      </ServiceLayout>

      <RootLayout className="bg-white">
        <Contact />
      </RootLayout>
      <Footer />
    </div>
  );
}
