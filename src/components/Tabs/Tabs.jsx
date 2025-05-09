export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleKeyDown = (event, tabId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (tabId !== activeTab.id) {
        onTabSelected(tabId);
      }
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" role="tablist">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTab.id ? 'is-active' : ''}
              key={tab.id}
              data-cy="Tab"
              role="presentation"
            >
              <a
                id={tab.id}
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="tab"
                aria-selected={tab.id === activeTab.id}
                tabIndex={tab.id === activeTab.id ? 0 : -1}
                onClick={() => tab.id !== activeTab.id && onTabSelected(tab.id)}
                onKeyDown={e => handleKeyDown(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
        role="tabpanel"
        aria-labelledby={activeTab.id}
      >
        {activeTab.content}
      </div>
    </div>
  );
};
