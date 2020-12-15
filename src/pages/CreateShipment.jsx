import React from 'react';
import { connect } from 'react-redux';
import { createShipment } from 'store/actions/createShipment';
import { create } from "utils/api";
import { InputGroup } from 'components';

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
      <form onSubmit={ submitShipment } className="md:px-40 px-5">
        <h3 className="text-mainBrand border-b-2 pb-4">
          Pengirim
        </h3>

        <div className="ml-0 md:ml-16 my-6">
          <InputGroup
            required
            title="Nama"
            onChange={ e => onDataChange('senderName', e) }
          />

          <InputGroup
            required
            type="email"
            title="Email"
            onChange={ e => onDataChange('senderEmail', e) }
          />

          <InputGroup
            required
            title="Alamat"
            onChange={ e => onDataChange('senderAddress', e) }
          />
        </div>

        <h3 className="text-mainBrand border-b-2 py-4">
          Penerima
        </h3>

        <div className="sm:ml-0 md:ml-16 mt-6">
          <InputGroup
            required
            title="Nama"
            onChange={ e => onDataChange('receiverName', e) }
          />

          <InputGroup
            required
            type="email"
            title="Email"
            onChange={ e => onDataChange('receiverEmail', e) }
          />

          <InputGroup
            required
            title="Nama"
            onChange={ e => onDataChange('receiverAddress', e) }
          />
        </div>

        <h3 className="text-mainBrand border-b-2 py-4">
          Muatan
        </h3>

        <div className="sm:ml-0 md:ml-16 mt-6">
          <InputGroup
            title="Deskripsi"
            onChange={ e => onDataChange('goodsDetail', e) }
          />

          <InputGroup
            required
            type="number"
            title="Berat"
            onChange={ e => onDataChange('weightInKilo', e) }
            appendText="kg"
          />

          <InputGroup
            required
            type="number"
            title="Volume"
            onChange={ e => onDataChange('volumeInCBM', e) }
            appendText="m3"
          />
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
