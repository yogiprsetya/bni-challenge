import React, { useEffect, useState, Fragment } from 'react';
import { sortByPage } from 'store/actions/shipmentFilter';
import { openModalStatus } from 'store/actions/appsControl';
import { connect } from 'react-redux';
import Icon from 'icon';
import { UpdateStatus } from 'components';

const navButtonStyle = "w-8 h-8 border-2 border-brandMain flex justify-center items-center"

const DetailPerson = ({ address, email }) => (
  <div className="px-3 ml-3 mt-5">
    <h3>Alamat</h3>
    <p className="text-xs">{ address }</p>

    <h3 className="mt-3">Email</h3>
    <p className="text-xs">{ email }</p>
  </div>
)

const Table = ({ shipments, byStatus, byBooking, dispatch, showModalStatus }) => {
  const [toggleTable, setToggleTable] = useState(false);
  const [dataDisplay, setDataDisplay] = useState(null);
  const [selectNoBooking, setSelectNoBooking] = useState(null);

  useEffect(() => {
    const filterStatus = shipments.data.filter(find => byStatus === '' ? find : find.status === byStatus);
    const filterBooking = filterStatus.filter(obj => byBooking === '' ? obj : Object.values(obj).includes(parseInt(byBooking)));

    setDataDisplay(filterBooking);
  }, [byStatus, byBooking, shipments.data]);

  const updateStatus = noBooking => {
    dispatch(openModalStatus(true));
    setSelectNoBooking(noBooking);
  }

  return (
    <Fragment>
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
            <tr key={ item.id } className="text-sm border-b-2">
              <td className="px-3 text-center">{ item.id }</td>

              <td className="px-3 py-5">
                <button
                  className="flex items-center"
                  onClick={ () => setToggleTable({[item.id]: !toggleTable[item.id]}) }
                >
                  <Icon icon={ toggleTable[item.id] ? 'arrow-down' : 'arrow-right' } color="#333" />
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
                  <Icon icon={ toggleTable[item.id] ? 'arrow-down' : 'arrow-right' } color="#333" />
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
                <button onClick={ () => updateStatus(item.id) }>
                  <Icon icon="edit" color="#999" />
                </button>
              </td>
            </tr>
          )) }

        </tbody>
      </table>

      <div className="mt-6 flex justify-between items-center">
        <p>Total { shipments.totalData } items</p>

        <div className="flex">
          <button
            className={ navButtonStyle }
            onClick={ () => dispatch(sortByPage(shipments.page - 1)) }
            disabled={shipments.page === 1}
          >
            <Icon icon="chevron-left" color={ shipments.page === 1 ? '#999' : '#333' } size={20} />
          </button>

          <button className={ `${navButtonStyle} mx-1` } disabled>
            <span>{ shipments.page }</span>
          </button>

          <button
            className={ navButtonStyle }
            onClick={ () => dispatch(sortByPage(shipments.page + 1)) }
            disabled={shipments.page === shipments.totalPage}
          >
            <Icon icon="chevron-right" color={ shipments.page === shipments.totalPage ? '#999' : '#333' } size={20} />
          </button>
        </div>
      </div>

      { showModalStatus && <UpdateStatus noBooking={ selectNoBooking } /> }
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state.shipmentFilter,
  ...state.appsControl
});

export default connect(mapStateToProps)(Table);
