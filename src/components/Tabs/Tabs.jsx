import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const selectTab = (isTabActive, tab) => {
    if (!isTabActive) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabActive = tab.id === selectedTab.id;
            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isTabActive})}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => selectTab(isTabActive, tab)}
                >
                  {tab.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
