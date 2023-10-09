/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import cn from 'classnames';
// eslint-disable-next-line import/no-unresolved
import { getSelectedTab } from './help';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = getSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (

            <li
              key={tab.id}
              className={cn({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
            >

              //eslint-disable-next-line max-len
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab.id !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              />
              {' '}
              {tab.title}
            </li>
          ))}
          &rbrace;

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
      ;
    </div>
  );
};
