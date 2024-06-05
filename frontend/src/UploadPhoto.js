import React, { useState } from "react";
import axios from "axios";
import "./UploadPhoto.css";

const UploadPhoto = ({ username }) => {
  const [photoData, setPhotoData] = useState(null);

  const handleUploadPhoto = async () => {
    if (photoData && username) {
      const photoBase64 = await toBase64(photoData);
      try {
        const response = await axios.post(
          process.env.REACT_APP_UPLOADPROFILEPHOTO_LAMBDA_API_ENDPOINT,
          { username, photoData: photoBase64 }
        );
        alert(response.data);
      } catch (error) {
        alert(error.response.data);
      }
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="upload-photo-container">
      <h2>Upload Photo</h2>
      <input type="file" onChange={(e) => setPhotoData(e.target.files[0])} />
      <br />
      <button onClick={handleUploadPhoto}>Upload Photo</button>
    </div>
  );
};

export default UploadPhoto;
