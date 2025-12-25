export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === currentTab.id ? 'is-active' : ''}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={event => {
                  event.preventDefault();
                  if (onTabSelected && tab.id !== currentTab.id) {
                    onTabSelected(tab.id);
                  }
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
