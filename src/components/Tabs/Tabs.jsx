import React from 'react';
import cn from 'classnames';
import { findTabById } from '../../utils';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const currentTab = findTabById(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { title, id } = tab;

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
        {currentTab?.content}
      </div>
    </div>
  );
};
