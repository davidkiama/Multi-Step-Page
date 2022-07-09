import React from "react";

import "./ProgressBar.css";

function ProgressBar({ maxPage, currPage }) {
  // create an array of steps from 1 - maxPage
  const steps = Array.from({ length: maxPage }, (v, i) => i + 1);

  console.log(currPage);
  return (
    <div className="steps">
      {steps.map((step) => (
        <span key={step} className={`${currPage > step || currPage === step ? "step--active" : ""} step`}>
          {step}
        </span>
      ))}
    </div>
  );
}

export default ProgressBar;
