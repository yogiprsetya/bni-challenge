import React, { useEffect, useState } from 'react';
import { StatCard, Table, FilterSection } from 'components'
import { read } from "utils/api";
import { connect } from 'react-redux';

const Dashbaord = ({ byPage }) => {
  const [summary, setSummary] = useState(null);
  const [shipments, setShipments] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resSummary = await read('shipments/status-summary');
      const resShipments = await read(`shipments?page=${byPage}&perPage=10`);

      setSummary(resSummary.data);
      setShipments(resShipments.data);
    };

    fetchData();
  }, [byPage]);

  return (
    <div className="">
      { summary && <div className="px-5 flex flex-row flex-wrap mt-16">
        <StatCard
          number={summary.complete + summary.request}
          title="Semua"
          icon="duplicate"
        />

        <StatCard
          number={summary.request}
          title="Request"
          icon="edit"
        />

        <StatCard
          number={summary.complete}
          title="Complete"
          icon="check"
        />
      </div> }

      <FilterSection />

      <div className="px-5">
        { shipments && <Table shipments={ shipments } /> }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.shipmentFilter
});

export default connect(mapStateToProps)(Dashbaord);
