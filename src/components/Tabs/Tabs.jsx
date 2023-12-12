import cn from 'classnames';

export function Tabs({
  tabs,
  selectedTabId,
  onTabSelected,
}) {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  function hasSameTabId(tabId, selTabId) {
    return tabId === selTabId;
  }

  function handleClickTab(tab) {
    if (!hasSameTabId(tab.id, selectedTabId)) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={tab.id}
                className={cn({
                  'is-active': hasSameTabId(id, selectedTab.id),
                })
                }
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClickTab(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
}
