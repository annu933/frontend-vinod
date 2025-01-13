import { TfiEmail, TfiLayoutLineSolid } from "react-icons/tfi";

export default function RootLayout({ children }) {
  return (
    <div className="mx-20">
      <div className="my-10">
        <h1 className="text-xl lg:text-2xl text-orange flex justify-center items-center font-bold font-montserrat">
          <TfiLayoutLineSolid className="mr-2 " /> Contact Us{" "}
          <TfiLayoutLineSolid className="ml-2" />
        </h1>
        <h2 className="text-center text-4xl font-bold my-4">
          <span className="text-orange">Contact</span> For Any Query
        </h2>

        {/* <div className="flex p-5 gap-10">
          <div className="p-4 shadow-md">
            <h1 className="text-xl lg:text-2xl text-orange flex justify-center font-bold">
              BOOKING <TfiLayoutLineSolid className="ml-2" />
            </h1>
            <div className="flex justify-center items-center">
              <TfiEmail className="text-orange" />
              <p>mail@domain.com</p>
            </div>
          </div>
          <div className="p-4 shadow-md">
            <h1 className="text-xl lg:text-2xl text-orange flex justify-center font-bold">
              GENERAL <TfiLayoutLineSolid className="ml-2" />
            </h1>
            <div className="flex justify-center items-center">
              <TfiEmail className="text-orange" />
              <p>mail@domain.com</p>
            </div>
          </div>
        </div> */}
      </div>
      {children}
    </div>
  );
}
