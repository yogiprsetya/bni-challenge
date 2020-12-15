import React from 'react';
import { update } from 'utils/api';
import { openModalStatus } from 'store/actions/appsControl';
import { connect } from 'react-redux';

const UpdateStatus = ({ noBooking, dispatch }) => {
  const makeComplete = () => {
    update(`shipments/${noBooking}/complete`)
    .then(() => window.location.reload())
    .catch(err => console.log(err.response))
  }

  const makeRequest = () => {
    update(`shipments/${noBooking}/request`)
    .then(() => window.location.reload())
    .catch(err => console.log(err.response))
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg w-1/3">
        <div className="border-b px-4 py-3 text-center">
          <h3 className="font-medium">Update Shipment No. Booking { noBooking }</h3>
        </div>

        <div className="p-4 my-5 flex justify-evenly">
          <button className="bg-green-600 text-white w-28 py-2 rounded" onClick={ makeComplete }>
            Complete
          </button>

          <button className="bg-blue-600 text-white w-28 py-2 rounded" onClick={ makeRequest }>
            Request
          </button>
        </div>

        <div className="flex justify-end items-center w-100 p-3">
          <button
            className="border border-gray-400 px-4 py-1 rounded"
            onClick={ () => dispatch(openModalStatus(false)) }
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.appsControl
});

export default connect(mapStateToProps)(UpdateStatus);
