import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  // got rid of checkers, now just assigning the active tab via OR construction
  // also tabs[0] at the end is mandatory to set a default in case find returns undefined
  // Which is necessary as one of the tests checks for
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
                onClick={() => {
                  if (selectedTab.id !== currentTab.id) {
                    onTabSelected(currentTab);
                  }
                }}
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
