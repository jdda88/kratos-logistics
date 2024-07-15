import React from "react";

function Application() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-bold mb-4 text-center">Delivery Driver Requirements</h3>
        <p className="mb-6 text-justify">
          Kratos Logistics accepts a wide range of applicants with varying levels
          of experience as professional drivers in delivery services. We provide
          thorough on-the-job training so that all of our employees feel confident
          on the road and the doorsteps of Amazon customers. Our main priority is
          drivers that we can trust to drive safely and deliver on time.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-center">Here are the requirements you must meet to get a job at Kratos:</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Be 21 years of age or older</li>
          <li>Holds a valid driver's license (no CDL required)</li>
          <li>Have a good driving history</li>
          <li>Have a positive attitude</li>
          <li>Fluent in English (being bilingual is a bonus)</li>
          <li>Available to work weekends and holidays</li>
          <li>Have a proven track record of reliability</li>
          <li>Have prior experience representing a well-regarded consumer brand with professionalism</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-center">Physical Requirements</h3>
        <p className="mb-6 text-justify">
          Just like with any other delivery driver job, there is a physical
          component to working for Kratos Logistics. These are important because
          they help us maintain consistently high-quality service for every
          customer. Here are the physical requirements you must meet to work for
          us:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Lift a maximum of 50 pounds during an 8 to 10-hour work shift</li>
          <li>Appropriately handle stressful driving demands including inclement weather conditions</li>
          <li>Climb stairs, reach overhead, squat/bend/kneel during an 8 to 10-hour work shift</li>
        </ul>
        <p className="mb-6 text-justify">
          In addition to all these basic requirements, it is crucial to Kratos
          Logistics that all our drivers have positive attitudes. We put much
          effort into making this company a place where people enjoy working. We
          want you to enjoy it too and always have a positive attitude when you
          are on the job. Not only does it brighten the customer’s day, but it
          also makes your co-workers enjoy working with you more.
        </p>
        <p className="mb-6 text-justify">
          As a Kratos Logistics' employee, you will join a growing team of drivers
          for an Amazon Delivery Service Partner. We are a community of caring
          people, and we would love to have you join us! Apply for a position
          today to start delivering smiles!
        </p>
      </div>
    </div>
  );
}

export default Application;
