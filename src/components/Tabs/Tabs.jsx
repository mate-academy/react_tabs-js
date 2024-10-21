import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const setOnClick = tabId => {
    if (tabId !== selectedTab.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {[...tabs].map(({ id, title }) => (
            <li
              key={id}
              className={cn({ 'is-active': id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                onClick={() => setOnClick(id)}
                data-cy="TabLink"
              >
                {title}
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
