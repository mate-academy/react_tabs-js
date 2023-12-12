import cn from 'classnames';

export function Tabs({
  tabs,
  selectedTabId,
  onTabSelected,
}) {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  const isIncorrectTabId = tabs.every(tab => tab.id !== selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': (selectedTabId === tab.id
                && !isIncorrectTabId)
                || (isIncorrectTabId && tab.id === tabs[0].id) })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (isIncorrectTabId) {
                    onTabSelected(tabs[0]);
                  } else if (selectedTabId !== tab.id) {
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
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
}
