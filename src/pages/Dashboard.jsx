import React from "react";
import "../components/styles/Dashboard.css";
import Marketing from "../components/martketing/Marketing";
import Counting from "../components/counting/Counting";
import Analize from "../components/analize/Analize";
import DashboardProvider from "../context/DashboardProvider";

function Dashboard(props) {
  return (
    <DashboardProvider>
      <div className="dashboard" id="dashboard">
        <Marketing />
        <Counting />
        <Analize />
      </div>
    </DashboardProvider>
  );
}

export default Dashboard;
