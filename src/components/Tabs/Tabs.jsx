import React from 'react';

export const Tabs = ({ tabs: tabsArray = [], activeTabId, onTabSelected }) => {
  // Якщо activeTabId неправильний або відсутній, активною стає перша вкладка
  const currentActiveTab =
    tabsArray.find(tab => tab.id === activeTabId) || tabsArray[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabsArray.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === currentActiveTab?.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== currentActiveTab?.id) {
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
        {currentActiveTab?.content}
      </div>
    </div>
  );
};
