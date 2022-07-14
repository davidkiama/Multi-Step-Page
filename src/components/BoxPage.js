import React, { useState } from "react";

import ProgressBar from "./ProgressBar";
import BoxPageSlide from "./BoxPageSlide";

import "./BoxPage.css";

function BoxPage() {
  const maxPage = 6; //The last page will not display the 'next page'
  const [currPage, setCurrPage] = useState(1);

  const goNextPage = () => {
    setCurrPage((currPage) => currPage + 1);
  };

  const goPrevPage = () => {
    setCurrPage((currPage) => currPage - 1);
  };
  return (
    <div className="box">
      <ProgressBar maxPage={maxPage} currPage={currPage} />
      <h2 className="box__heading">Multi Step Process </h2>

      <div className="box__main">
        <BoxPageSlide currPage={currPage} pageNumber={1}>
          Page 1
          <br />
          Content goes here...
        </BoxPageSlide>

        <BoxPageSlide currPage={currPage} pageNumber={2}>
          Page 2
        </BoxPageSlide>

        <BoxPageSlide currPage={currPage} pageNumber={3}>
          Page 3
        </BoxPageSlide>

        <BoxPageSlide currPage={currPage} pageNumber={4}>
          Page 4
        </BoxPageSlide>

        <BoxPageSlide currPage={currPage} pageNumber={5}>
          Page 5
        </BoxPageSlide>

        <BoxPageSlide currPage={currPage} pageNumber={6}>
          Page 6
        </BoxPageSlide>
      </div>

      <div className="box__footer">
        <span className={`${currPage === 1 ? "hidden" : ""}  footer__btn`} onClick={goPrevPage}>
          &laquo; Prev
        </span>
        <span className={`${currPage === maxPage ? "hidden" : ""}  footer__btn`} onClick={goNextPage}>
          Next &raquo;
        </span>
      </div>
    </div>
  );
}

export default BoxPage;
