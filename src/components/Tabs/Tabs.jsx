export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const {
    id: activeId,
    content: activeContent,
  } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabSelect = (selectedTab) => {
    if (selectedTab.id !== activeId) {
      onTabSelected(selectedTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeId && 'is-active'}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent}
      </div>
    </div>
  );
};
