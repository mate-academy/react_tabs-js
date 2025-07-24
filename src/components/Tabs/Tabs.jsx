import React, { useState, useEffect } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const [selectedTabId, setSelectedTabId] = useState(() => {
    // Якщо activeTabId валідний — вибираємо його, інакше перший таб
    return tabs.some(tab => tab.id === activeTabId) ? activeTabId : tabs[0]?.id;
  });

  useEffect(() => {
    // Якщо проп activeTabId зміниться, оновлюємо selectedTabId
    if (tabs.some(tab => tab.id === activeTabId)) {
      setSelectedTabId(activeTabId);
    } else {
      setSelectedTabId(tabs[0]?.id);
    }
  }, [activeTabId, tabs]);

  const handleTabClick = (id, e) => {
    e.preventDefault();
    if (id !== selectedTabId) {
      setSelectedTabId(id);
      if (onTabSelected) {
        onTabSelected(id);
      }
    }
  };

  const activeTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(tab.id, e)}
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
