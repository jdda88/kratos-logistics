import React from "react";
import employees from "../../employees.json";

function TeamLeaders() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mt-20 m-4">
      <h3 className="text-3xl font-semibold mb-4 justify-center text-center">Our Team</h3>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="flex flex-col sm:w-full md:w-3/4 lg:w-2/4 justify-center items-center bg-white shadow-md rounded-lg p-4 m-5"
        >
          <img
            src={employee.image}
            alt={employee.name}
            className="object-contain rounded m-4"
          />
          <div className="flex flex-col md:ml-4">
            <h2 className="text-2xl font-semibold mb-2 text-center">{employee.name}</h2>
            <p className="text-xl m-2 text-wrap text-center">{employee.position}</p>
            <p className="text-gray-600 m-2 text-wrap text-xl text-justify">{employee.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamLeaders;
