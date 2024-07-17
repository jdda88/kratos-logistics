import React from "react";

function MissionVision() {
  return (
    <div className="container mx-auto px-4 mt-14 mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center">Mission & Vision</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 bg-slate-300 rounded-lg">
        <div className="bg-slate-300 rounded-lg overflow-hidden max-w-md mx-auto md:mx-0 s">
          <div className="p-4 md:p-6">
            <h3 className="text-3xl font-semibold mb-2 text-center">Mission</h3>
            <p className="text-xl">
              To redefine logistical excellence through seamless integration and
              innovation, becoming the preferred partner for last-mile delivery
              solutions.
            </p>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg overflow-hidden max-w-md mx-auto md:mx-0 ">
          <div className="p-4 md:p-6">
            <h3 className="text-3xl font-semibold mb-2 text-center">Vision</h3>
            <p className="text-xl">
              Our mission is to deliver exceptional service reliability and
              customer satisfaction in every interaction. By leveraging advanced
              technology and a dedicated team, we ensure swift, secure, and
              sustainable delivery solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
