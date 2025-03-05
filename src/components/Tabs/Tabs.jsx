export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const checkedId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={checkedId === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  return tab.id !== checkedId && onTabSelected(tab.id);
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
    </div>
  );
};
