import React, { useEffect, useState } from 'react';
import { sortByStatus } from 'store/actions/shipmentFilter';
import { connect } from 'react-redux';

const FilterSection = ({ dispatch, byStatus }) => {

  return (
    <div className="my-12 border-b-2">
      <div className="px-5">
        <button
          className={ `px-5 py-4 mx-3 text-gray-700 ${byStatus === '' ? 'border-b-2 border-mainBrand' : ''}` }
          onClick={ () => dispatch(sortByStatus('')) }
        >
          Semua
        </button>

        <button
          className={ `px-5 py-4 mx-3 text-gray-700 ${byStatus === 'request' ? 'border-b-2 border-mainBrand' : ''}` }
          onClick={ () => dispatch(sortByStatus('request')) }
        >
          Request
        </button>

        <button
          className={ `px-5 py-4 mx-3 text-gray-700 ${byStatus === 'complete' ? 'border-b-2 border-mainBrand' : ''}` }
          onClick={ () => dispatch(sortByStatus('complete')) }
        >
          Complete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.shipmentFilter
});

export default connect(mapStateToProps)(FilterSection);
