import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" data-cy="tab-content">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': currentTab.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => currentTab.id !== tab.id && onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
