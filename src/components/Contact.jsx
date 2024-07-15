import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center m-8 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center md:items-start">
        <img
          src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720827279/Kratos%20Logistics/logo-transparent_na6aqz.png"
          alt="Kratos Logistics Logo"
          className="w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Kratos Logistics LLC</h2>
          <span className="block mb-1">
            6499 NW 12 AVE ​Fort Lauderdale, FL 33309
          </span>
          <p className="mb-1">​954-800-3172</p>
          <p>​kratoslogisticsinbox@gmail.com</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38011.78657858458!2d-80.20093834166616!3d26.1922012611786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d903bc2fe98593%3A0xbaced13865e5f845!2s6499%20NW%2012th%20Ave%2C%20Fort%20Lauderdale%2C%20FL%2033309!5e0!3m2!1sen!2sus!4v1721078366385!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
