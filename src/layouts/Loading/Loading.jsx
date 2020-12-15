import React from 'react';
import Icon from 'icon';

const Loading = () => (
  <div className="w-full h-full top-0 left-0 fixed justify-center items-center bg-white bg-opacity-70 z-30 flex">
    <div className="animate-spin">
      <Icon icon="loading" color="#209cd4" size={60} />
    </div>
  </div>
);

export default Loading;
