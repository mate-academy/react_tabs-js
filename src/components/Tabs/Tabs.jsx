export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = activeTab.id === tab.id;

            return (
              <li
                key={tab.id}
                className={`${isActive && 'is-active'}`}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
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
