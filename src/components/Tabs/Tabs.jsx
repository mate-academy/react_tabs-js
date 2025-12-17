import cn from 'classnames';

function getActiveTab(tabsForFilter, activeTabId) {
  return tabsForFilter.find(({ id }) => id === activeTabId);
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = getActiveTab(tabs, activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={cn({ 'is-active': id === activeTabId })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== activeTabId) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
