export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              data-cy="Tab"
              key={element.id}
              className={validTabId === element.id && 'is-active'}
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (validTabId !== element.id) {
                    onTabSelected(element.id);
                  }
                }}
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {activeTab && (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};
