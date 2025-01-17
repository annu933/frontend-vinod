import { TfiEmail, TfiLayoutLineSolid } from "react-icons/tfi";

export default function ServiceLayout({ children }) {
  return (
    <div id="services" className="container mx-auto px-4 py-8 bg-[#0F172B]">
      <div className="my-10">
        <h1 className="text-2xl font-medium text-orange mb-2 text-center flex items-center justify-center">
          <TfiLayoutLineSolid className="mr-1" />
          Our Services <TfiLayoutLineSolid className="ml-1" />
        </h1>
        <p className="text-4xl font-bold text-orange mb-4 text-center">
          <span className="text-white">Explore Our</span> Services
        </p>
      </div>
      {children}
    </div>
  );
}
