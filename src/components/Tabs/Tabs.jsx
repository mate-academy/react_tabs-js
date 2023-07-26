import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, callbackTabSelected }) => (
  // function callbackIsTabChanged (selectedTab, tab) {
  //   if (selectedTab !== tab) {
  //     callbackTabSelected(tab);
  //   }
  // }

  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              { 'is-active': selectedTab === tab },
            )}
            data-cy="Tab"
            // onClick={() => callbackTabSelected(tab)}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => callbackTabSelected(tab)}
            >
              { tab.title }
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      { selectedTab.content }
    </div>
  </div>
);
