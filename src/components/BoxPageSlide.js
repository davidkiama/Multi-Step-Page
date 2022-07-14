import React from "react";

function BoxPageSlide(props) {
  const currPage = props.currPage;
  const pageNumber = props.pageNumber;

  return (
    <div
      className={`
                  ${currPage === pageNumber ? "active" : ""} 
                  ${currPage > pageNumber ? "prev" : ""} box__page`}
    >
      {props.children}
    </div>
  );
}

export default BoxPageSlide;
