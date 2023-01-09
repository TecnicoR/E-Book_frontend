import React from "react";
import { RingLoader } from "react-spinners";
import './loader.css'


function Loader() {
  return (
    <div className="loader">
      <RingLoader color="blue" />
    </div>
  );
}

export default Loader;
