export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const isTabExist = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isTabExist ? activeTabId : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === currentActiveId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === currentActiveId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    event.preventDefault(); 
                    if (!isActive && onTabSelected) {
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
        {activeTab ? activeTab.content : ''}
      </div>
    </div>
  );
};