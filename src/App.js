import { useState } from "react";

import "./App.css";

function App() {
  const maxPage = 6; //The last page will not display the 'next page'
  const [currPage, setCurrPage] = useState(1);

  const goNextPage = () => {
    setCurrPage((currPage) => currPage + 1);
  };

  const goPrevPage = () => {
    setCurrPage((currPage) => currPage - 1);
  };

  return (
    <div id="container">
      <div className="box">
        <h2 className="box__heading">Multi Step Process </h2>

        <div className="box__main">
          <div
            className={`
            ${currPage === 1 ? "active" : ""} 
            ${currPage > 1 ? "prev" : ""} box__page`}
          >
            Page 1
          </div>
          <div
            className={`
          ${currPage === 2 ? "active" : ""}
          ${currPage > 2 ? "prev" : ""} box__page`}
          >
            Page 2
          </div>

          <div
            className={`
          ${currPage === 3 ? "active" : ""}  
          ${currPage > 3 ? "prev" : ""}   box__page`}
          >
            Page 3
          </div>

          <div
            className={`${currPage === 4 ? "active" : ""}  
            ${currPage > 4 ? "prev" : ""}  box__page`}
          >
            Page 4
          </div>
          <div
            className={`${currPage === 5 ? "active" : ""}  
            ${currPage > 5 ? "prev" : ""}  box__page`}
          >
            Page 5
          </div>
          <div
            className={`
          ${currPage === 6 ? "active" : ""}  
          ${currPage > 6 ? "prev" : ""}  box__page`}
          >
            Page 6
          </div>
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
    </div>
  );
}

export default App;
