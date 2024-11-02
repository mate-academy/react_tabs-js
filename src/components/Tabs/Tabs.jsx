export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const selectedTabId = selectedTab.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              {tab.id === activeTabId ? (
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              ) : (
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    onTabSelected(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
