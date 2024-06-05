import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import UploadPhoto from "./UploadPhoto";
import "./UserProfile.css";

const UserProfile = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const [profile, setProfile] = useState(null);

  const handleGetProfile = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_GETUSERPROFILE_LAMBDA_API_ENDPOINT,
        {
          params: { username },
        }
      );
      setProfile(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <button onClick={handleGetProfile}>Get Profile</button>
      {profile && (
        <div>
          <h3>Profile</h3>
          <p>Username: {username}</p>
          {profile.photoUrl && <img src={profile.photoUrl} alt="Profile" />}
        </div>
      )}
      <UploadPhoto username={username} />
    </div>
  );
};

export default UserProfile;
