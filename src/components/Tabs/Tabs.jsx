import cn from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={
                  () => (tab.id !== selectedTab.id && onTabSelected(tab))
                }
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
