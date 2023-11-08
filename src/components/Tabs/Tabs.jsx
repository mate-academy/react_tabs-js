export const Tabs = ({ selectedTabId, tabs, onTabSelected }) => {
  let [selectedTab] = tabs.filter(tab => tab.id === selectedTabId);

  if (!selectedTab) {
    [selectedTab] = [tabs[0]];
  }

  const selectedTabContent = selectedTab.content;

  const handleTabClick = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
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
        {selectedTabContent}
      </div>
    </div>
  );
};
