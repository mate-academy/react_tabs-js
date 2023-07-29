import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let currentTab = tabs.find(tab => tab.id === selectedTabId);

  if (!currentTab) {
    const defaultValue = 0;

    currentTab = tabs[defaultValue];
  }

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': selectedTabId === tab.id },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== currentTab.id) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  { tab.title }
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          { currentTab.content }
        </div>
      </div>
    </>
  );
};
