export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const setCurrent = (tabId) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTab.id === tab.id && 'is-active'}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setCurrent(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
