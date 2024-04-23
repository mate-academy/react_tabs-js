export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  let CurrentActiveTab = activeTabId;

  if (!tabs.some(tab => tab.id === CurrentActiveTab)) {
    CurrentActiveTab = tabs[0].id;
    onTabSelected(CurrentActiveTab);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === CurrentActiveTab ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
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
        {tabs.map(tab =>
          tab.id === CurrentActiveTab ? (
            <div key={tab.id}>{tab.content}</div>
          ) : null,
        )}
      </div>
    </div>
  );
};
