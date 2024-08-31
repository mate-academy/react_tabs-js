export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = tabId => {
    if (tabId !== activeTab.id) {
      onTabSelected(tabId);
    }
  };

  const handleKeyDown = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive =
              tab.id === activeTabId ||
              (activeTabId &&
                !tabs.find(t => t.id === activeTabId) &&
                tab.id === tabs[0].id);

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                tabIndex="0"
                role="tab"
                className={isActive ? 'is-active' : ''}
                onClick={() => handleTabClick(tab.id)}
                onKeyDown={event => handleKeyDown(event, tab.id)}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
