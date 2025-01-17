import ContactForm from "./contact";

export default function Contact() {
  return (
    <div className="bg-white flex lg:flex-row flex-col-reverse items-center justify-between gap-10 p-5 lg:mx-5">
      <div className="lg:w-1/2">
        <div className="rounded-lg shadow-lg overflow-hidden h-[400px]">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509438!2d-122.4194154846811!3d37.77492977975924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c4f420cd3%3A0x9a3e6f1e2e2c1dc1!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1694506097236!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          {/* https://www.google.com/maps/place/Jai+maa+travels/@29.3798295,79.4615291,17z/data= */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3476.6741237943656!2d79.4615291!3d29.3798295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1485e1cdd0f%3A0xb3ba9ad733b01d91!2sJai%20maa%20travels!5e0!3m2!1sen!2sin!4v1737117472266!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style="border:0;"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
