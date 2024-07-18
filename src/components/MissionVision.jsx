import React from "react";

function MissionVision() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mt-8 mb-28">
      <div className="md:p-12 max-w-3xl mx-auto md:mr-10 md:ml-10 md:text-center">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6">
          Mission & Vision
        </h2>
        <p className="text-lg md:text-3xl text-justify">
          Our vision is to redefine logistical excellence through seamless
          integration and innovation, becoming the preferred partner for
          last-mile delivery solutions. Our mission is to deliver exceptional
          service reliability and customer satisfaction in every interaction. By
          leveraging advanced technology and a dedicated team, we ensure swift,
          secure, and sustainable delivery solutions that exceed expectations.
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          className="rounded-r-full h-auto max-w-md md:max-w-none mx-auto"
          src="https://res.cloudinary.com/dprkq4xne/image/upload/v1721323078/Kratos%20Logistics/amazon-truck-kratos_q7cnux.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default MissionVision;
