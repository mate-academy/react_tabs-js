import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Перевірка: якщо activeTabId не знайдено, беремо перший таб
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="tabs">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={event => {
                    event.preventDefault();
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="box" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
