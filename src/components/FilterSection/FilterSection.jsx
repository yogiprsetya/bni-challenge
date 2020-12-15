import React from 'react';
import { sortByStatus, sortByBooking } from 'store/actions/shipmentFilter';
import { connect } from 'react-redux';
import Icon from 'icon';

const FilterSection = ({ dispatch, byStatus }) => {

  return (
    <div className="my-10">
      <div className="mb-6 border-b-2">
        <div className="px-5 -mx-3 w-full">
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

      <div className="flex justify-between px-5">
        <label className="flex items-center mb-5">
          <span className="mr-6">Pencarian</span>

          <input
            required
            className="border py-1 px-2"
            onChange={ e => dispatch(sortByBooking(e.target.value)) }
          />

          <div className="bg-mainBrand h-full w-8 flex justify-center items-center">
            <Icon icon="search" color="#333" />
          </div>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.shipmentFilter
});

export default connect(mapStateToProps)(FilterSection);
