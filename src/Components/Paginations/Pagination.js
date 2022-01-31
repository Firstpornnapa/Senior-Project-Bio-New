import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if(currentPage!==Math.round(totalCount/pageSize)){
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if(currentPage-1!==0){
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination justify-content-end', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('page-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="page-item dots">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            className={classnames('page-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <span className='page-link'>{pageNumber}</span>
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('page-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;