import React from 'react';
import { Tab } from '../Tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            selected={selectedTab.id === tab.id}
            onTabSelected={onTabSelected}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
