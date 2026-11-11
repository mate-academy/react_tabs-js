export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const selectedTabId = selectedTab.id;
  const selectedTabContent = selectedTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isActive = id === selectedTabId;

            return (
              <li
                key={id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(id);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
