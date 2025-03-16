export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Find the active tab or default to the first tab if activeTabId is invalid
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="button" // Make <a> interactive
                tabIndex={0} // Make it focusable
                onClick={e => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleTabClick(tab.id);
                }}
                onKeyPress={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleTabClick(tab.id);
                  }
                }} // Handle keyboard events
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
