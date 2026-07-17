import cn from 'classnames';

const Tab = ({ tabId, tabtitle, activeTabId, onTabSelected }) => {
  return (
    <li className={cn({ 'is-active': tabId === activeTabId })} data-cy="Tab">
      <a
        href={`#${tabId}`}
        data-cy="TabLink"
        onClick={event => {
          event.preventDefault();
          if (tabId !== activeTabId) {
            onTabSelected(tabId);
          }
        }}
      >
        {tabtitle}
      </a>
    </li>
  );
};

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(one => (
            <Tab
              key={one.id}
              tabId={one.id}
              tabtitle={one.title}
              activeTabId={activeTab ? activeTab.id : ''}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
