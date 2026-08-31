export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidActiveId = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isValidActiveId ? activeTabId : tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === currentActiveId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (tab.id !== currentActiveId) {
                    onTabSelected(tab.id);
                  }
                }}
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
