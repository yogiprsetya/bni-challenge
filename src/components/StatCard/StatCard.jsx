import React from 'react';
import Icon from 'icon';

const StatCard = ({ icon, number, title }) => (
  <div className="bg-softDrop flex-1 mx-2 px-3 py-4 rounded border-gary-500 border-2 mb-3">
    <div className="flex justify-between">
      <div>
        <p className="text-mainBrand">{ title }</p>
        <p className="font-bold">{ number }</p>
      </div>

      <Icon icon={ icon } size={ 55 } />
    </div>
  </div>
);

export default StatCard;
