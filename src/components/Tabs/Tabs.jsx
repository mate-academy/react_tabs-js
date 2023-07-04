import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const isSelected = currentTab => currentTab.id === selectedTab.id;

  const handleTabClick = (tab) => {
    if (selectedTab.id === tab.id) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': isSelected(tab),
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => handleTabClick(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
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
