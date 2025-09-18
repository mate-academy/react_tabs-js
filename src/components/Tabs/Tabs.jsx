export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

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
                className={tab.id === activeTab.id ? 'is-active' : ''}
                tabIndex={0}
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeTab.id) {
                    onTabSelected(tab.id);
                  }
                }}
                onKeyDown={e => {
                  if (
                    (e.key === 'Enter' || e.key === ' ') &&
                    tab.id !== activeTab.id
                  ) {
                    e.preventDefault();
                    onTabSelected(tab.id);
                  }
                }}
                aria-current={tab.id === activeTab.id ? 'page' : undefined}
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
