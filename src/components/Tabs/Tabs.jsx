export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const currentTab = tabs.find(tab => tab.id === currentTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${currentTabId === tab.id ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== currentTabId) {
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

      <div data-cy="TabContent">{currentTab.content}</div>
    </div>
  );
};
