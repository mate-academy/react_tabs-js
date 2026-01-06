export const findActiveTab = (tabs, activeTabId) => {
  return tabs.find(tab => tab.id === activeTabId) || tabs[0];
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = findActiveTab(tabs, activeTabId);

  const handleTabClick = (e, tabId) => {
    e.preventDefault();

    if (tabId !== activeTab.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={e => handleTabClick(e, tab.id)}
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
        {activeTab.content}
      </div>
    </>
  );
};
