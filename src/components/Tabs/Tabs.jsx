import cn from 'classnames';

export const Tabs = ({ tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected }) => {
  const handleClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tabs.find(tabsTab => tabsTab.id === tab.id));
    }
  };

  const getIsActive = (tab) => {
    if (tab.id === selectedTabId
      || (tabs.find(tabsTab => tabsTab.id === selectedTabId) === undefined
      && tab.id === tabs[0].id)) {
      return true;
    }

    return false;
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const selectedTabContent = selectedTab.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': getIsActive(tab) })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
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
