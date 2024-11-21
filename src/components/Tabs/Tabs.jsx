export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const { id: selectedTabId, content } =
    tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const clickTab = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => clickTab(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
