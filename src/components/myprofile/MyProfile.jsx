import React, { useEffect, useState } from "react";
import "./myprofile.css";


function MyProfile() {
  const tabs = ["Settings", "Change Password", "My Orders", "Logout"];
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div className="my-profile">
      <div className="menu-items">
        {tabs?.map((eachTab) => (
          <div onClick={() => setSelectedTab(eachTab)}>{eachTab}</div>
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default MyProfile;
