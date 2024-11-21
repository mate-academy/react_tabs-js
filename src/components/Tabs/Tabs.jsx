export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabId = activeTabId;
  const isIdValid = tabs.some(tab => tab.id === tabId);

  if (!isIdValid) {
    tabId = tabs[0].id;
  }

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${tabId === tab.id ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id === tabId) {
                    return;
                  }

                  onTabSelected(tab.id);
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
