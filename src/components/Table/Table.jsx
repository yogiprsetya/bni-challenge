import React, { useEffect, useState } from 'react';
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

const Table = ({ shipments, byStatus, byBooking }) => {
  const [toggleTable, setToggleTable] = useState(false);
  const [dataDisplay, setDataDisplay] = useState(null);

  useEffect(() => {
    const filterStatus = shipments.data.filter(find => byStatus === '' ? find : find.status === byStatus);
    const filterBooking = filterStatus.filter(obj => byBooking === '' ? obj : Object.values(obj).includes(parseInt(byBooking)));

    setDataDisplay(filterBooking);
  }, [byStatus, byBooking, shipments.data]);

  return (
    <table className="w-full md:table block overflow-y-auto">
      <thead>
        <tr className="bg-softDrop text-mainBrand">
          <th className="py-5 px-3 font-normal w-36">No Bookig</th>
          <th className="px-3 text-left font-normal w-64">Data Pengirim</th>
          <th className="px-3 text-left font-normal w-64">Data Penerima</th>
          <th className="px-3 text-left font-normal">Detail Barang</th>
          <th className="px-3 text-left font-normal">Status</th>
          <th className="px-3 font-normal">Aksi</th>
        </tr>
      </thead>

      <tbody>
        { dataDisplay && dataDisplay.map(item => (
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

            <td className="px-3 capitalize">
              <div className="flex items-center">
                <span className={`${item.status === 'request' ? 'bg-blue-600' : 'bg-green-600'} block rounded-full h-2 w-2 mr-2`}></span>
                { item.status }
              </div>
            </td>

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