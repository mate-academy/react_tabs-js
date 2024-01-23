import React from 'react';
import './Tabs.scss';
import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab) => {
    if (activeTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': activeTab.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        <p className="content">
          {activeTab.content}
        </p>
      </div>
    </div>
  );
};
