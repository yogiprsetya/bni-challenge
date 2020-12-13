import React from 'react';
import Icon from 'icon';

export default function Loading({ shown }) {
  if (!shown) return null;

  return (
    <div className="loading-bar">
      <Icon name="circle-progress" />
    </div>
  );
}
