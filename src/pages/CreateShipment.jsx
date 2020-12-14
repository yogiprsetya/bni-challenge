import React from 'react';
import { connect } from 'react-redux';
import { createShipment } from 'store/actions/createShipment';
import { create } from "utils/api";

const CreateShipment = ({ dispatch, dataShipment }) => {


  const submitShipment = e => {
    e.preventDefault();

    const data = {
      senderName: dataShipment.senderName,
      senderEmail: dataShipment.senderEmail,
      senderAddress: dataShipment.senderAddress,
      receiverName: dataShipment.receiverName,
      receiverEmail: dataShipment.receiverEmail,
      receiverAddress: dataShipment.receiverAddress,
      weightInKilo: dataShipment.weightInKilo,
      volumeInCBM: dataShipment.volumeInCBM,
      goodsDetail: dataShipment.goodsDetail || ''
    }

    create('shipments', data)
      .then(() => alert('Sukses'))
      .catch(err => alert(err.response))
  }

  const onDataChange = (key, value) => {
    dispatch(createShipment({...dataShipment, [key]: value}))
  }

  return (
    <div className="my-12">
      <form onSubmit={ submitShipment } className="md:px-40 sm:px-5">
        <h3 className="text-mainBrand border-b-2 pb-4">
          Pengirim
        </h3>

        <div className="sm:ml-0 md:ml-16 my-6">
          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right text-right">
              <small className="text-red-600 mr-2">*</small>
              Nama
            </span>

            <input
              required
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('senderName', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Email
            </span>

            <input
              required
              type="email"
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('senderEmail', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Alamat
            </span>

            <input
              required
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('senderAddress', e.target.value) }
            />
          </label>
        </div>

        <h3 className="text-mainBrand border-b-2 py-4">
          Penerima
        </h3>

        <div className="sm:ml-0 md:ml-16 mt-6">
          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Nama
            </span>

            <input
              required
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('receiverName', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Email
            </span>

            <input
              required
              type="email"
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('receiverEmail', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Alamat
            </span>

            <input
              required
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('receiverAddress', e.target.value) }
            />
          </label>
        </div>

        <h3 className="text-mainBrand border-b-2 py-4">
          Muatan
        </h3>

        <div className="sm:ml-0 md:ml-16 mt-6">
          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">Deskripsi</span>

            <input
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('goodsDetail', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Berat
            </span>

            <input
              required
              type="number"
              className="border py-1 px-2 flex-grow"
              onChange={ e => onDataChange('weightInKilo', e.target.value) }
            />
          </label>

          <label className="flex items-center mb-5">
            <span className="w-1/12 mr-5 text-right">
              <small className="text-red-600 mr-2">*</small>
              Volume
            </span>

            <input
              required
              type="number"
              className="border py-1 px-2 flex-grow appearance-none"
              onChange={ e => onDataChange('volumeInCBM', e.target.value) }
            />
          </label>
        </div>

        <button className="px-8 py-2 bg-mainBrand mx-auto block mt-8">
          Submit
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.createShipment
});


export default connect(mapStateToProps)(CreateShipment);
