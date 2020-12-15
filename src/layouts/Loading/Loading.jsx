import React from 'react';
import Icon from 'icon';

const Loading = () => (
  <div
    className="w-full h-full top-0 left-0 fixed justify-center items-center z-30 flex"
    style={{ backgroundColor: 'rgba(255, 255, 255, .7)' }}
  >
    <div className="animate-spin">
      <Icon icon="loading" color="#209cd4" size={60} />
    </div>
  </div>
);

export default Loading;
