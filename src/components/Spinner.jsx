import React from "react";
import { ImSpinner } from "react-icons/im";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner ">
      <ImSpinner className="spinning " size={60} />
    </div>
  );
}
