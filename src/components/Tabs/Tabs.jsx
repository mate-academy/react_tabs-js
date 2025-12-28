export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === activeId);

  const handleTabClick = tabId => {
    if (tabId !== activeId) {
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
              className={tab.id === activeId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
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
        {activeTab?.content}
      </div>
    </div>
  );
};
