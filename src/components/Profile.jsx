import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8070/api/user/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching profile data");
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);
  console.log("Profile Data:", profileData);
  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Profile</h2>
      {profileData && (
        <div>
          <p>
            <strong>Username:</strong> {profileData.username}
          </p>
          <p>
            <strong>Email:</strong> {profileData.email}
          </p>
          {/* Display other profile data here */}
        </div>
      )}
    </div>
  );
};

export default Profile;
