import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Icon from 'icon';

const DetailPerson = ({ address, email }) => (
  <div className="px-3 ml-3 mt-5">
    <h3>Alamat</h3>
    <p className="text-xs">{ address }</p>

    <h3 className="mt-3">Email</h3>
    <p className="text-xs">{ email }</p>
  </div>
)

const Table = ({ shipments, byStatus }) => {
  const [toggleTable, setToggleTable] = useState(false)

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-softDrop text-mainBrand">
          <th className="py-5 px-3 font-normal w-56">No Bookig</th>
          <th className="px-3 text-left font-normal w-64">Data Pengirim</th>
          <th className="px-3 text-left font-normal w-64">Data Penerima</th>
          <th className="px-3 text-left font-normal">Detail Barang</th>
          <th className="px-3 text-left font-normal">Status</th>
          <th className="px-3 font-normal">Aksi</th>
        </tr>
      </thead>

      <tbody>
        { shipments.data.filter(find => byStatus === '' ? find : find.status === byStatus).map(item => (
          <tr key={ item.id } className="text-sm">
            <td className="px-3 text-center">{ item.id }</td>

            <td className="px-3 py-5">
              <button
                className="flex items-center"
                onClick={ () => setToggleTable({[item.id]: !toggleTable[item.id]}) }
              >
                <Icon icon={ toggleTable[item.id] ? 'chevron-down' : 'chevron-right' } color="#333" />
                <span className="ml-3">{ item.senderName }</span>
              </button>

              { toggleTable[item.id] && <DetailPerson
                address={ item.senderAddress }
                email={ item.senderEmail }
              /> }
            </td>

            <td className="px-3">
              <button
                className="flex items-center"
                onClick={ () => setToggleTable({[item.id]: !toggleTable[item.id]}) }
              >
                <Icon icon={ toggleTable[item.id] ? 'chevron-down' : 'chevron-right' } color="#333" />
                <span className="ml-3">{ item.receiverName }</span>
              </button>

              { toggleTable[item.id] && <DetailPerson
                address={ item.receiverAddress }
                email={ item.receiverEmail }
              /> }
            </td>
            <td className="px-3">{ item.goodsDetail }</td>
            <td className="px-3 capitalize">{ item.status }</td>

            <td className="px-3 text-center">
              <button>
                <Icon icon="edit" color="#999" />
              </button>
            </td>
          </tr>
        )) }

      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  ...state.shipmentFilter
});

export default connect(mapStateToProps)(Table);