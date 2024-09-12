export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabClick = id => {
    if (id !== activeTab.id) {
      onTabSelected(id);
    }
  };

  const handleKeyPress = (event, id) => {
    if ((event.key === 'Enter' || event.key === ' ') && id !== activeTab.id) {
      onTabSelected(id);
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
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={event => handleKeyPress(event, tab.id)}
              role="tab"
              tabIndex={0}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
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
    </>
  );
};
