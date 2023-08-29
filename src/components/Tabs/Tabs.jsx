export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const defaultSelectedTab = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  const handleTabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
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
              className={tab.id === defaultSelectedTab.id
                ? 'is-active'
                : ''
              }
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === defaultSelectedTab.id)?.content}
      </div>
    </div>
  );
};
