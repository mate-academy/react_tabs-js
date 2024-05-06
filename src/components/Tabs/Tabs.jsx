import cn from 'classnames';

export const Tabs = ({ activeTabId, onTabSelected, tabs, selectedTab }) => {
  const isActive = tabId => tabId === activeTabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': isActive(tab.id) })}
              data-cy="Tab"
            >
              <a
                onClick={() => !isActive(tab.id) && onTabSelected(tab.id)}
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
