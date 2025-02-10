import React, { useState } from "react";
import axios from "axios"; // Import Axios for API calls

const AddMaterial = () => {
  const [file, setFile] = useState(null);
  const [subjectName, setSubjectName] = useState("");
  const [subjectDesc, setSubjectDesc] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store selected file in state
  };

  // Handle form submission
  const handleClick = async () => {
    if (!file || !subjectName || !subjectDesc) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("subjectMaterial", file); // Backend expects 'image' as the field name
    formData.append("subjectName", subjectName);
    formData.append("description", subjectDesc);

    try {
      const res = await axios.post("https://mca-doc-server.onrender.com/api/subject/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("Material added successfully!");
        setFile(null);
        setSubjectName("");
        setSubjectDesc("");
      } else {
        alert(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error adding material:", error);
      alert("Failed to upload material");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <div>
          <input
            type="file"
            // name="subjectMaterial"
            onChange={handleFileChange}
            className=" w-[250px] lg:w-[400px] px-2 py-2 rounded bg-gray-700 text-white"
          />
        </div>
        <div>
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-[250px] lg:w-[400px] px-2 py-2 rounded border border-gray-400"
            placeholder="Subject name e.g. Python"
          />
        </div>
        <div>
          <input
            type="text"
            value={subjectDesc}
            onChange={(e) => setSubjectDesc(e.target.value)}
            className="w-[250px] lg:w-[400px] px-2 py-2 rounded border border-gray-400"
            placeholder="Subject Description e.g. Python Unit-1"
          />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="bg-black text-white px-3 py-2 rounded cursor-pointer"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Add Material"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddMaterial;
