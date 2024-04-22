export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => activeTabId === tab.id) || tabs[0];

  const tabClick = tab => {
    if (currentTab.id !== tab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={currentTab.id === tab.id && 'is-active'}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(tab)}
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
