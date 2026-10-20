export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = (e, tabId) => {
    e.preventDefault();

    if (tabId !== activeTab?.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="Tabs">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeTab?.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => handleTabClick(e, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
