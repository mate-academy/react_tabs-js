export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const foundTab = tabs.find(tab => tab.id === activeTabId);
  const currentActiveTabId = foundTab ? activeTabId : tabs[0].id;
  const activeTab = tabs.find(tab => tab.id === currentActiveTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === currentActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== currentActiveTabId ? onTabSelected(tab.id) : null
                }
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
