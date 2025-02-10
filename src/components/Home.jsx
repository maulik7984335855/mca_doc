import React, { useContext, useState } from "react";
import AppContext from "../context/App_Context";

const Home = () => {
  const { material, filtered, setSelectedOption, selectedOption } =
    useContext(AppContext);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div>
        {/* Dropdown to filter subjects */}
        <div className="filter flex justify-center ">
          {material.length > 0 && (
            <select
              onChange={handleChange}
              value={selectedOption}
              className="w-[320px] rounded px-2 py-3 mt-2"
            >
              <option className="text-black" value="">
                All
              </option>
              {material.map((data) => (
                <>
                  <option
                    value={data.subjectName}
                    key={data._id}
                    className="text-black"
                  >
                    {data.subjectName}
                  </option>
                </>
              ))}
            </select>
          )}
        </div>

        {/* Display PDF files */}
        <div className="main flex flex-wrap justify-center gap-4 mt-4">
          {filtered.length > 0 ? (
            filtered.map((data) => (
              <div
                key={data._id}
                className="border rounded-lg p-4 w-[230px] shadow-lg"
              >
                <h3 className="text-lg font-semibold">{data.subjectName}</h3>
                <p className="text-gray-600">{data.description}</p>

                {/* Display PDF */}
                <div className="mt-3">
                  <iframe
                    src={data.subjectMaterial}
                    className="border w-[200px] h-[250px] object-contain "
                  />
                </div>

                {/* Download Button */}
                <div className="mt-4 text-center">
                  <a
                    href={data.subjectMaterial}
                    download
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h2 className="font-bold text-xl">Not Found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
