import cn from 'classnames';
// eslint-disable-next-line import/no-cycle

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = tab => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={cn({
                  'is-active': tab.id === selectedTab.id,
                })}
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
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
