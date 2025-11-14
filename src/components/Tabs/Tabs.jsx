import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (tabs.length === 0) {
    return <div data-cy="TabsComponent">No tabs</div>;
  }

  const selectedTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': tab.id === selectedTab.id,
              })}
            >
              <a
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
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
        {selectedTab.content || 'No content'}
      </div>
    </div>
  );
};
