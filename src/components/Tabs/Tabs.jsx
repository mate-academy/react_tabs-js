export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === activeTabId);
  let selectedTabId = activeTabId;

  if (!selectedTab) {
    // eslint-disable-next-line prefer-destructuring
    selectedTab = tabs[0];
    selectedTabId = selectedTab.id;
  }

  const activeTabContent = selectedTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${tab.id === selectedTabId ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              {tab.id !== selectedTabId ? (
                <a
                  href={`#${tab.id}`}
                  onClick={() => {
                    onTabSelected(tab.id);

                    return false;
                  }}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              ) : (
                <a
                  href={`#${tab.id}`}
                  onClick={() => {
                    return false;
                  }}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};
