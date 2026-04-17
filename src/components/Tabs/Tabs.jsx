import React from 'react';
import { Tab } from '../Tab/Tab';
import { getActiveTab } from '../../utils';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = getActiveTab({ tabs, activeTabId });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTabId={currentTab?.id}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </div>
  );
};
