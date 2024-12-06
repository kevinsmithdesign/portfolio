import React from "react";
import DoctorCommunication from "../assets/images/DoctorCommunication.svg";
// import Test from "https://assets.codepen.io/2392702/Group+241611.svg";

const CollaborationImg = () => {
  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        background: "#111",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={DoctorCommunication}
        alt="Doctor Support"
        style={{ maxWidth: "480px", width: "100%" }}
      />
    </div>
  );
};

export default CollaborationImg;
