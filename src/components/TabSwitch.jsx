/* eslint-disable react/prop-types */

import { useState } from "react";

const TabSwitch = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("day");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex items-center">
      <button
        className={`mr-4 py-1 px-2 rounded ${
          activeTab === "day"
            ? "bg-pink text-white"
            : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => handleTabChange("day")}
      >
        Day
      </button>
      <button
        className={`py-1 px-2 rounded ${
          activeTab === "week"
            ? "bg-pink text-white"
            : "bg-gray-300 text-gray-600"
        }`}
        onClick={() => handleTabChange("week")}
      >
        Week
      </button>
    </div>
  );
};

export default TabSwitch;
