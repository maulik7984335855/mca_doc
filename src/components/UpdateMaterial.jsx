import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../context/App_Context";

const UpdateMaterial = () => {
  const { material } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [fileUrl, setFileUrl] = useState("");
  const [updatedFile, setUpdatedFile] = useState(null);
  const [updatedSubjectName, updatedSetSubjectName] = useState("");
  const [updatedSubjectDesc, updatedSetSubjectDesc] = useState("");
  const [loading, setLoading] = useState(false);

  // Get the current material based on ID
  const data = material.find((ele) => ele._id === id);

  // Set initial values when data is available
  useEffect(() => {
    if (data) {
      updatedSetSubjectName((prev) => prev || data.subjectName);
        updatedSetSubjectDesc((prev) => prev || data.description);

      if (data.subjectMaterial) {
        setFileUrl(data.subjectMaterial);
      }
    }
  }, [data]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setUpdatedFile(selectedFile);
    }
  };

  // Handle form submission
  const handleClick = async () => {
    if (!updatedFile && !fileUrl) {
      alert("A file is required!");
      return;
    }

    if (!updatedSubjectName || !updatedSubjectDesc) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    if (updatedFile) formData.append("subjectMaterial", updatedFile);
    formData.append("subjectName", updatedSubjectName);
    formData.append("description", updatedSubjectDesc);

    try {
      const res = await axios.put(
        // `http://localhost:5000/api/subject/update/${id}`,
        `https://mca-doc-server.onrender.com/api/subject/update/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        alert("Material updated successfully!");
        navigate("/");
      } else {
        alert(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error updating material:", error);
      alert("Failed to update material");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-[110px] items-center justify-center h-full gap-3">
      {/* File Upload Input */}
      <div className="flex flex-col items-center gap-2">
        <input
          type="file"
          name="subjectMaterial"
          onChange={handleFileChange}
          className="w-[250px] lg:w-[400px] px-2 py-2 rounded bg-gray-700 text-white"
        />

        {/* Display the selected or existing file name */}
        {updatedFile ? (
          <span className="max-w-[90%] sm:max-w-[300px] lg:max-w-[400px] h-auto flex flex-wrap overflow-hidden text-sm sm:text-base break-all">
            {updatedFile.name}
          </span>
        ) : fileUrl ? (
          <a href={fileUrl} download className="text-blue-400 underline">
            Download Existing File
          </a>
        ) : null}
      </div>

      {/* Subject Name Input */}
      <div>
        <input
          type="text"
          value={updatedSubjectName}
          onChange={(e) => updatedSetSubjectName(e.target.value)}
          className="w-[250px] lg:w-[400px] px-2 py-2 rounded border border-gray-400"
          placeholder="Subject name e.g. Python"
        />
      </div>

      {/* Subject Description Input */}
      <div>
        <input
          type="text"
          value={updatedSubjectDesc}
          onChange={(e) => updatedSetSubjectDesc(e.target.value)}
          className="w-[250px] lg:w-[400px] px-2 py-2 rounded border border-gray-400"
          placeholder="Subject Description e.g. Python Unit-1"
        />
      </div>

      {/* Update Button */}
      <div>
        <button
          onClick={handleClick}
          className="bg-black text-white px-3 py-2 rounded cursor-pointer"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Material"}
        </button>
      </div>
    </div>
  );
};

export default UpdateMaterial;
