export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabIds = tabs.map(tab => tab.id);
  const currentActiveId = validTabIds.includes(activeTabId)
    ? activeTabId
    : tabs[0].id;

  const currentTab = tabs.find(tab => tab.id === currentActiveId) || tabs[0];

  return (
    <>
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
        {currentTab.content}
      </div>
    </>
  );
};
