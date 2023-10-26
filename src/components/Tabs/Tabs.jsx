import React, { useState } from 'react';
import cn from 'classnames';
import { tabs } from '../../constants';

export const Tabs = ({ onTabSelect }) => {
  const initialTab = tabs.find(tab => tab.title === 'Tab 1');
  const [activeTab, setActiveTab] = useState(initialTab.id);

  const tabClick = (tab) => {
    if (activeTab === tab.id) {
      return;
    }

    setActiveTab(tab.id);
    onTabSelect(tab.id);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': activeTab === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
