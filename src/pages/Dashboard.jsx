import React, { useEffect, useState } from 'react';
import { StatCard, Table, FilterSection } from 'components'
import { read } from "utils/api";

const Dashbaord = () => {
  const [summary, setSummary] = useState(null);
  const [shipments, setShipments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const resSummary = await read('shipments/status-summary');
      const resShipments = await read('shipments?page=1&perPage=10');

      setSummary(resSummary.data);
      setShipments(resShipments.data);
    };

    fetchData();
  }, []);

  return (
    <div className="">
      { summary && <div className="px-5 flex justify-between mt-16">
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
          number={summary.request}
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

export default Dashbaord;
