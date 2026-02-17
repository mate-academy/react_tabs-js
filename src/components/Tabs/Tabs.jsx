import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Захист від порожнього або відсутнього tabs
  if (!tabs || tabs.length === 0) {
    return null;
  }

  // Якщо activeTabId не знайдений — беремо перший таб
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === activeTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  // Викликаємо callback ТІЛЬКИ якщо таб не активний
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

      {/* Контент активного таба */}
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
