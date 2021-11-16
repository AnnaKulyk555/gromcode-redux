import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const isPrevDisable = currentPage <= 0;
  const isNextDisable = currentPage >= Math.ceil(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={isPrevDisable}>
        {isPrevDisable ? null : '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} className="btn" disabled={isNextDisable}>
        {isNextDisable ? null : '→'}
      </button>
    </div>
  );
};

export default Pagination;
