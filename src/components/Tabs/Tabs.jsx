export const Tabs = ({
  tabs,
  selectTab,
  onSelectTab,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectTab) || tabs[0];

  const clickTabs = (tabId) => {
    if (tabId !== selectedTab.id) {
      onSelectTab(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectTab ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => clickTabs(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
