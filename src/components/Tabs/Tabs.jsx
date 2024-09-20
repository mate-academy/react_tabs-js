export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const selectedTab = activeTab || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                data-cy="TabLink"
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
