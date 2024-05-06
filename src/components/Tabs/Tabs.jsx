import cn from 'classnames';

export const Tabs = ({ activeTabId, onTabSelected, tabs, selectedTab }) => {
  const tabSelected = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const isActive = tabId => tabId === tabSelected.id;

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
        {tabSelected.content}
      </div>
    </div>
  );
};
