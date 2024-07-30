export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  const activeTabContent = tabs.find(tab => tab.id === validActiveTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={validActiveTabId === tab.id ? 'is-active' : ''}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
                  handleTabClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent.content}
      </div>
    </div>
  );
};
