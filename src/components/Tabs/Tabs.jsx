import { useState, useEffect } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const findTabById = id => tabs.find(tab => tab.id === id) || tabs[0];
  const [activeTab, setActiveTab] = useState(findTabById(activeTabId));

  useEffect(() => {
    setActiveTab(findTabById(activeTabId));
  }, [activeTabId, tabs]);

  const handleTabClick = tab => {
    if (tab.id !== activeTab.id) {
      setActiveTab(tab);
      onTabSelected?.(tab.id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tab.id === activeTab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={e => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="block" data-cy="TabContent">
            {activeTab.content}
          </div>
        </div>
      </div>
    </div>
  );
};
