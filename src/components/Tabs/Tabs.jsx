export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTab = tabs.find(tab => tab.id === activeTabId);

  let finalActiveTabId = activeTabId;

  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  if (activeTab === undefined && tabs.length !== 0) {
    finalActiveTabId = tabs[0].id;
    activeTab = { ...tabs[0] };
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={finalActiveTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
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
