import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Loader(props) {
  return (
    <div className="spinner">
      <BounceLoader {...props} />
    </div>
  );
}
