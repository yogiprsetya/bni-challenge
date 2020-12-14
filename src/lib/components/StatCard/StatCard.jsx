import React, { useState } from 'react';
import Icon from 'icon';

const StatCard = ({ icon, number, title }) => {
  return (
    <div className="bg-softDrop flex flex-1 justify-between mx-2 px-3 py-4 rounded border-gary-500 border-2">
      <div>
        <p className="text-mainBrand">{ title }</p>
        <p className="font-bold">{ number }</p>
      </div>

      <Icon icon={ icon } size={ 55 } />
    </div>
  );
}

export default StatCard;
