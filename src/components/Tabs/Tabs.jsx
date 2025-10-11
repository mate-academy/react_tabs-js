export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTab =
    tabs.some(tab => tab.id === activeTabId) && activeTabId
      ? activeTabId
      : tabs[0]?.id;

  const handleTabClick = tabId => {
    if (validActiveTab !== tabId) {
      onTabSelected(tabId);
    }
  };

  const activeTabDescription = tabs.find(
    tab => tab.id === validActiveTab,
  )?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={validActiveTab === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();

                  handleTabClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabDescription}
      </div>
    </div>
  );
};
