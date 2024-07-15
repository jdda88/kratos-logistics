import React from "react";

function Application() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Delivery Driver Requirements
        </h3>
        <p className="mb-6 text-justify">
          Kratos Logistics accepts a wide range of applicants with varying
          levels of experience as professional drivers in delivery services. We
          provide thorough on-the-job training so that all of our employees feel
          confident on the road and the doorsteps of Amazon customers. Our main
          priority is drivers that we can trust to drive safely and deliver on
          time.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-center">
          Here are the requirements you must meet to get a job at Kratos:
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li>Be 21 years of age or older</li>
          <li>Holds a valid driver's license (no CDL required)</li>
          <li>Have a good driving history</li>
          <li>Have a positive attitude</li>
          <li>Fluent in English (being bilingual is a bonus)</li>
          <li>Available to work weekends and holidays</li>
          <li>Have a proven track record of reliability</li>
          <li>
            Have prior experience representing a well-regarded consumer brand
            with professionalism
          </li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-center">
          Physical Requirements
        </h3>
        <p className="mb-6 text-justify">
          Just like with any other delivery driver job, there is a physical
          component to working for Kratos Logistics. These are important because
          they help us maintain consistently high-quality service for every
          customer. Here are the physical requirements you must meet to work for
          us:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Lift a maximum of 50 pounds during an 8 to 10-hour work shift</li>
          <li>
            Appropriately handle stressful driving demands including inclement
            weather conditions
          </li>
          <li>
            Climb stairs, reach overhead, squat/bend/kneel during an 8 to
            10-hour work shift
          </li>
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
          As a Kratos Logistics' employee, you will join a growing team of
          drivers for an Amazon Delivery Service Partner. We are a community of
          caring people, and we would love to have you join us! Apply for a
          position today to start delivering smiles!
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 w-full mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Follow steps below to apply for Delivery position:
          </h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-3">
              <strong>STEP 1:</strong> Complete Formal video interview.
              <span className="block ml-5">(FOLLOW INSTRUCTIONS BELOW)</span>
            </li>
            <li className="mb-3">
              <strong>STEP 2:</strong> Print and complete job application below.
            </li>
            <li className="mb-3">
              <strong>STEP 3:</strong> Obtain 3 year driving record from link
              below.
              <ul className="list-disc list-inside ml-5 mt-2">
                <li>
                  Email 3 year driving record to{" "}
                  <a
                    href="mailto:Kratoshiringlist@gmail.com"
                    className="text-blue-600 underline"
                  >
                    Kratoshiringlist@gmail.com
                  </a>
                </li>
                <li>Print copy and bring with job application.</li>
              </ul>
            </li>
            <li className="mb-3">
              <strong>STEP 4:</strong> Prepare for face to face interview at
              Amazon warehouse.
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-3 text-center">
            Tips for a successful video/online interview:
          </h3>
          <ul className="list-decimal list-inside mb-6">
            <li className="mb-2">Use Chrome or Firefox web browser.</li>
            <li className="mb-2">
              Identify a quiet location for interview and allocate 30 minutes.
            </li>
            <li className="mb-2">Relax and be yourself.</li>
            <li className="mb-2">
              This is a formal interview, dress professionally.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-3 text-center">
            Useful Links
          </h3>
          <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="https://start.myinterview.com/kratos-logistics/amazon-delivery-associate?unique_id=97afc89c-7778-40a8-b429-4a779660cc89"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-40 p-2 bg-orange-600 hover:bg-orange-700 text-white text-center rounded-md"
            >
              Interview
            </a>
            <a
              href="https://www.drivesafetoday.com/florida-driving-records"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-40 p-2 bg-orange-600 hover:bg-orange-700 text-white text-center rounded-md"
            >
              Driving Record
            </a>
            <a
              href="https://www.kratoslogistics360.com/uploads/1/3/3/0/133048635/kratos_application.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-40 p-2 bg-orange-600 hover:bg-orange-700 text-white text-center rounded-md"
            >
              Application Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
