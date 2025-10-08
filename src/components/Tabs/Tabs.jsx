export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentActiveId = activeTabId || tabs[0].id;

  const currentTab = () => {
    return tabs.find(tab => tab.id === activeTabId) || tabs[0];
  };

  const activeTab = currentTab();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === currentActiveId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== currentActiveId) {
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
        {activeTab.content}
      </div>
    </div>
  );
};
