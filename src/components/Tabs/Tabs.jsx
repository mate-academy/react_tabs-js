export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected /* setActiveTabId */,
}) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0]?.id;
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleTabClick = tabId => {
    if (tabId !== activeTab) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabData && activeTabData.content}
      </div>
    </div>
  );
};
