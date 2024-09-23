export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const handleKeyDown = (event, tabId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onTabSelected(tabId);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul role="tablist">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
              role="tab"
              aria-selected={tab.id === activeTab.id}
              tabIndex={tab.id === activeTab.id ? -1 : 0}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="button"
                tabIndex={0}
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                onKeyDown={event => handleKeyDown(event, tab.id)}
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
    </>
  );
};
