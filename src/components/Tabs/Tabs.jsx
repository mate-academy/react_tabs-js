import { useMemo } from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = useMemo(() => {
    return tabs.some(tab => tab.id === activeTabId) ? activeTabId : tabs[0].id;
  }, [tabs, activeTabId]);

  const activeTab = useMemo(() => {
    return tabs.find(tab => tab.id === validActiveTabId) || tabs[0];
  }, [tabs, validActiveTabId]);

  const handleTabClick = (e, id) => {
    e.preventDefault();
    if (id !== validActiveTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};
