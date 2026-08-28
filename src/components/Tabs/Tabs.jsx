export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTabIndex = tabs.findIndex(tab => tab.id === activeTabId);

  if (activeTabIndex === -1) {
    activeTabIndex = 0;
  }

  const activeTab = tabs[activeTabIndex];
  const activeTabIdChecked = activeTab.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const currentTabIsActive = activeTab.id === tab.id;

            return (
              <li
                className={currentTabIsActive ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== activeTabIdChecked) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
