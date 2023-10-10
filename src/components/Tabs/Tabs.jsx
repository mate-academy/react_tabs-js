import React from 'react';
import classnames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const handleTabClick = (e, tab) => {
    e.preventDefault();
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  const activeTab = tabs.find(tab => tab.id === selectedTab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classnames({
                'is-active': id === activeTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(e, { id, title })}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
