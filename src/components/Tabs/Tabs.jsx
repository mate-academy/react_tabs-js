import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      {!!tabs.length && (
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                data-cy="Tab"
                key={id}
                className={cn({ 'is-active': selectedTab.id === id })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (id !== activeTabId ? onTabSelected(id) : '')}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
