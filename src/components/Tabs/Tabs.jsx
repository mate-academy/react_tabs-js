import cn from 'classnames';

function handleTabClick(event, currentTab, activeTabId, callback) {
  event.preventDefault();

  if (activeTabId !== currentTab.id) {
    callback(currentTab);
  }
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { id: activeTabId, content: activeTabContent } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': id === activeTabId })
                }
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    handleTabClick(event, tab, activeTabId, onTabSelected);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};
