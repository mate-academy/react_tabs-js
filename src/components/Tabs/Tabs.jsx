export const Tabs = ({
  tabs = [],
  activeTabId,
  onTabSelected = () => {},
}) => {
  const currentActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;

  const activeTab =
    tabs.find(tab => tab.id === currentActiveTabId) || tabs[0] || null;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isActive = tab.id === currentActiveTabId;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (!isActive) {
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

      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
