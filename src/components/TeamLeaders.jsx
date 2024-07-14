import React from "react";
import employees from "../../employees.json";

function TeamLeaders() {
  return (
    <div>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className=""
        >
          <img
            src={employee.image}
            alt={employee.name}
            className="w-full md:w-1/2 h-48 object-cover rounded-t-lg md:rounded-none"
          />
          <div>
            <h2>{employee.name}</h2>
            <p>{employee.position}</p>
            <p>{employee.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamLeaders;
