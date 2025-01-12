import { TfiLayoutLineSolid } from "react-icons/tfi";

export default function RootLayout({ children }) {
  return (
    <div className="bg-red-500">
      <h1 className="text-xl lg:text-2xl text-orange flex">
        About Us <TfiLayoutLineSolid className="ml-2" />
      </h1>
      {children}
    </div>
  );
}
