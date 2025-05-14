export const Tabs = ({ tabs, activeTabID, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabID) || tabs[0];
  const handleClick = tabId => {
    if (tabId !== activeTabID) {
      onTabSelected(tabId);
    }
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={tab.id === activeTabID ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={handleClick.bind(null, tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
