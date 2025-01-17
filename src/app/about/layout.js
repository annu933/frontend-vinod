import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function AboutLayout({ children }) {
  return (
    <div className="">
      <h1 className="text-xl lg:text-2xl text-orange flex">
        About Us <TfiLayoutLineSolid className="ml-2" />
      </h1>
      {children}
    </div>
  );
}
