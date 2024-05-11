export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      {tabs.length !== 0 && (
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={selectedTab.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() =>
                    tab.id !== activeTabId ? onTabSelected(tab.id) : ''
                  }
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
