import React from "react";
import TeamLeaders from "../components/TeamLeaders";
import CompanyValues from "../components/CompanyValues";
import MissionVision from "../components/MissionVision";

function About() {
  return (
    <div>
      <MissionVision />
      <CompanyValues />
      <TeamLeaders />
    </div>
  );
}

export default About;
