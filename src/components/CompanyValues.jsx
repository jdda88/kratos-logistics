import React from "react";
import MissionVision from "./MissionVision";

function CompanyValues() {
  return (
    <div>
      <MissionVision />
      <div className="container mx-auto px mt-8">
        <h2 className="text-3xl font-semibold mb-4 justify-center text-center">
          Core Values
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Customers First</h3>
            <p className="text-sm">
              Our company exists to deliver packages to Amazon customers. We
              make every decision and measure every outcome based on how well it
              serves our customers.
            </p>
          </article>
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Result Oriented</h3>
            <p className="text-sm">
              Our company brings it! We have an unrelenting drive to be great.
              We reach for awesome results and take pride in high quality work.
            </p>
          </article>
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Dedication</h3>
            <p className="text-sm">
              Our company believes whatever it takes to get the job done...
              whenever, wherever.
            </p>
          </article>
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p className="text-sm">
              Our company believes in the strength of our employees and their
              abilities, coming together to achieve something great.
            </p>
          </article>
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-sm">
              Our company believes in always doing the right thing even when no
              one is looking.
            </p>
          </article>
          <article className="core-values-card">
            <h3 className="text-xl font-semibold mb-2">Fun</h3>
            <p className="text-sm">
              Our company advocates a work environment of pleasant social
              interactions and a competitive spirit.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default CompanyValues;
