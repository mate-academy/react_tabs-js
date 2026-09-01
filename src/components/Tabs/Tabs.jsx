export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={activeTab.id === tab.id ? 'is-active' : ''}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== activeTabId) onTabSelected(tab.id);
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tabs is-boxed">
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};
