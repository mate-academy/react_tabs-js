export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // let currentTab = tabs.find(tab => tab.id === activeTabId);
  // if (!tabs.find(tab => tab.id === activeTabId)) {
  //   onTabSelected(tabs[0].id);
  // }
  const activeTab = tabs.find(tab => tab.id === activeTabId) ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={activeTab === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() =>
                    activeTab !== tab.id && onTabSelected(tab.id)
                  }
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
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
