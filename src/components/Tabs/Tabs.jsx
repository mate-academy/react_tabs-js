function showContent(tabs, activeId) {
  const activated = tabs.find(tab => tab.id === activeId);

  if (activated) {
    return (
      <div className="block" data-cy="TabContent">
        {activated.content}
      </div>
    );
  }

  return null;
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                onKeyDown={event => {
                  if (
                    (event.key === 'Enter' || event.key === ' ') &&
                    tab.id !== activeTabId
                  ) {
                    onTabSelected(tab.id);
                  }
                }}
                tabIndex={0}
                role="tab"
                aria-selected={tab.id === activeTab.id}
                className={tab.id === activeTab.id ? 'is-active' : ''}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {showContent(tabs, activeTabId)}
    </div>
  );
};
