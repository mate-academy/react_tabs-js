import React from 'react';

const TabContent = ({ text }) => {
  return (
    <div className="block" data-cy="TabContent">
      {text}
    </div>
  );
};

export default TabContent;
