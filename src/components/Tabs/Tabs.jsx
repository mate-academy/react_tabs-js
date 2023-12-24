import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const changeTab = (neededTab) => {
    if (neededTab.id !== selectedTab.id) {
      onTabSelected(neededTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={cn({ 'is-active': tab.id === selectedTab.id })}
              >
                <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => changeTab(tab)}>{tab.title}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.filter(tab => tab.id === selectedTab.id)[0].content
        }
      </div>
    </div>
  );
};
