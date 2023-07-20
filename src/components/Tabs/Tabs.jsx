import classNames from 'classnames';
import React from 'react';

const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({
              'is-active': tab.id === selectedTabId,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab && selectedTab.content}
    </div>
  </div>
);

export default Tabs;
