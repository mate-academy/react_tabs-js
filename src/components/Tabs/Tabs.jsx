import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Handle empty tabs array
  if (!tabs || tabs.length === 0) {
    return <div data-cy="TabsComponent">No tabs available</div>;
  }

  // Find the active tab, fallback to first tab if activeTabId is invalid
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = tabId => {
    // Compare against the resolved active tab's id, not the incoming activeTabId
    const isActive = tabId === activeTab.id;

    // Only call onTabSelected if a different (non-active) tab is clicked
    if (!isActive && typeof onTabSelected === 'function') {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" role="tablist">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
              role="presentation"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="tab"
                aria-selected={tab.id === activeTab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={event => {
                  event.preventDefault();
                  handleTabClick(tab.id);
                }}
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
        id={`panel-${activeTab.id}`}
        aria-labelledby={activeTab.id}
      >
        {activeTab.content}
      </div>
    </div>
  );
};
