import { useState } from 'react';

export const Tabs = ({ tabs, onTabSelected }) => {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  const handleSelect = tabId => {
    if (tabId !== activeId) {
      setActiveId(tabId);
      onTabSelected?.(tabId);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  handleSelect(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab?.content}</div>
    </div>
  );
};
