import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const currentTabContent = tabs.find(({ id }) => id === currentTabId).content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn(
                { 'is-active': currentTabId === tab.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (currentTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTabContent}
      </div>
    </div>
  );
};
