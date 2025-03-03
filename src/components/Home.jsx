import React, { useContext, useState } from "react";
import AppContext from "../context/App_Context";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const {
    material,
    filtered,
    setSelectedOption,
    selectedOption,
    setInput,
    theme,
  } = useContext(AppContext);

  let mySet = new Set(material.map((ele) => ele.subjectName));
  let newArr = [...mySet];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div
        className={`pb-10 pt-[110px] min-h-screen  ${
          theme ? "bg-base-100 text-white" : "bg-white text-black"
        }`}
      >
        {/* Dropdown to filter subjects */}
        <div
          className={`flex justify-center items-center lg:flex-row flex-col gap-3  `}
        >
          <div className="filter flex justify-center ">
            {newArr.length > 0 && (
              <select
                onChange={handleChange}
                value={selectedOption}
                className="w-[320px] capitalize rounded px-2 py-3 mt-2"
              >
                <option className="text-black" value="">
                  All
                </option>
                {newArr.map((data) => (
                  <>
                    <option value={data} key={data._id} className="text-black capitalize">
                      {data}
                    </option>
                  </>
                ))}
              </select>
            )}
          </div>
          <div>
            <input
              type="search"
              className="w-[320px] rounded px-2 py-3 mt-2"
              onChange={(e) => setInput(e.target.value)}
              required
              placeholder="Search"
            />
          </div>
        </div>

        {/* Display PDF files */}
        <div className="main flex flex-wrap justify-center gap-4 mt-4">
          {filtered.length > 0 ? (
            filtered.map((data) => (
              <div
                key={data._id}
                className="border flex flex-col justify-between rounded-lg p-4 w-[230px] shadow-lg"
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
                <div className="mt-4 text-center flex gap-2">
                  <a
                    href={data.subjectMaterial}
                    download
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    Download PDF
                  </a>
                  <Link
                    to={`/edit/${data._id}`}
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    <FaRegEdit />
                  </Link>
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
