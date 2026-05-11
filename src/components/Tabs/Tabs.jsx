import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  // Шукаємо активну вкладку за ID, якщо не знаходимо — беремо першу з масиву
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              // Додаємо клас is-active, якщо id збігається з id активної вкладки
              className={classNames({ 'is-active': tab.id === activeTab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  // Викликаємо колбек тільки якщо вибрано нову вкладку
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
