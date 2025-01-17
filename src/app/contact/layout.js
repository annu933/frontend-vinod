import { TfiEmail, TfiLayoutLineSolid } from "react-icons/tfi";

export default function RootLayout({ children }) {
  return (
    <div id="contact" className="lg:mx-20 py-5">
      <div className="lg:my-10">
        <h1 className="text-xl lg:text-2xl text-orange flex justify-center items-center font-bold font-montserrat">
          <TfiLayoutLineSolid className="mr-2 " /> Contact Us{" "}
          <TfiLayoutLineSolid className="ml-2" />
        </h1>
        <h2 className="text-center text-2xl lg:text-4xl font-bold my-4">
          <span className="text-orange">Contact</span> For Any Query
        </h2>
      </div>
      {children}
    </div>
  );
}
