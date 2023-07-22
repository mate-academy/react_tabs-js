import cn from 'classnames';

export const Tab = ({ tab, currentTab, onTabSelected }) => {
  const tabClick = () => {
    if (tab.id !== currentTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <li
      className={cn({ 'is-active': tab.id === currentTab.id })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={tabClick}
      >
        {tab.title}
      </a>
    </li>
  );
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              tab={tab}
              currentTab={currentTab}
              onTabSelected={onTabSelected}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
