import { Fragment } from 'react';
import 'bulma/css/bulma.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              // I compare unique identifiers correctly! This is not object comparing!
              className={clsx({ 'is-active': tab.id === validActiveTab.id })}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validActiveTab.content}
      </div>
    </>
  );
};
