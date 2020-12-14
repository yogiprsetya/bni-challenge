import React, { useEffect, useState } from 'react';
import { StatCard } from 'lib/components'
import { read } from "utils/api";

const Dashbaord = () => {
  const [summary, setSummary] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const resSummary = await read('shipments/status-summary');
console.log(resSummary.data)
      setSummary(resSummary.data);
    };

    fetchData();
  }, [])

  return (
    <div className="px-5">
      <div className="flex justify-between mt-16 -mx-2">
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
      </div>
    </div>
  )
}

export default Dashbaord;
