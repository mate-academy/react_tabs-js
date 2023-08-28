import React from 'react';
import cn from 'classnames';
import { findTab } from '../../utils';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const currentTab = findTab(tabs, selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={cn({ 'is-active': currentTab.id === id })}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (id !== selectedTabId) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
      >
        {findTab(tabs, selectedTabId)?.content}
      </div>
    </div>
  );
};
