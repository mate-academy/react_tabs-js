import cn from 'classnames';

function selectTab(selectedTab, currentTab, onTabSelected) {
  // Function for onClick event
  return () => {
    if (selectedTab.id !== currentTab.id) {
      onTabSelected(currentTab);
    }
  };
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((currentTab, i) => (
            <li // added classnames as requested
              className={cn({ 'is-active': selectedTab.id === currentTab.id })}
              data-cy="Tab"
              key={currentTab.id}
            >
              <a
                href={`#${currentTab.id}`}
                data-cy="TabLink"
                onClick={selectTab(selectedTab, currentTab, onTabSelected)}
              >
                {currentTab.title}
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
