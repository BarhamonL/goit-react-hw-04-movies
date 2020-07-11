import React from "react";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Spinner() {
  return (
    <div className="Spinner">
      <Loader type="Circles" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
