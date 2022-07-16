import React from 'react';
import { PropTypes } from 'prop-types';

function Pagination({
  start, end, onNext, onPrev, length,
}) {
  return (
    (
      <div className="pagination mx-auto">
        <div className="container mt-3 mb-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start my-2 my-md-0">
              {/* Showing 1 to 10 of 100 */}
              <p className=" m-0">
                Showing
                {' '}
                <span>{start + 1}</span>
                {' '}
                to
                {' '}
                <span>{end > length ? length : end}</span>
                {' '}
                of
                {' '}
                <span>{length}</span>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end my-2 my-md-0">
              {
                         start <= 0
                           ? (
                             <button type="button" className=" link btn fw-bold py-2 px-5 me-2" disabled>
                               Prev
                               {' '}
                             </button>
                           )
                           : (
                             <button type="button" className=" link btn fw-bold py-2 px-5 me-2" onClick={onPrev}>
                               Prev
                               {' '}
                             </button>
                           )
                        }
              {
                         end >= length
                           ? (
                             <button type="button" className=" link btn fw-bold py-2 px-5 ms-2 me-0" disabled>
                               Next
                               {' '}
                             </button>
                           )
                           : (
                             <button type="button" className=" link btn fw-bold py-2 px-5 ms-2 me-0" onClick={onNext}>
                               Next
                               {' '}
                             </button>
                           )
                        }
            </div>
          </div>
        </div>
      </div>
    )
  );
}
Pagination.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  length: PropTypes.number,
};

Pagination.defaultProps = {
  start: 0,
  end: 0,
  onNext: '',
  onPrev: '',
  length: 0,
};
export default Pagination;
