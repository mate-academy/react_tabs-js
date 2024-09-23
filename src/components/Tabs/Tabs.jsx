export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const handleKeyDown = (event, tabId) => {
    // Check if the key pressed is Enter or Space
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
              tabIndex={tab.id === activeTab.id ? -1 : 0} // Make non-active tabs focusable
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="button"
                tabIndex={0} // Make the link focusable
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                onKeyDown={event => handleKeyDown(event, tab.id)} // Handle keyboard events
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
