import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { id: currentTabId, content: currentTabContent } = selectedTab;

  const handleTabClick = (tab) => {
    if (currentTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

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
                className={cn({ 'is-active': id === currentTabId })
                }
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    event.preventDefault();
                    handleTabClick(tab);
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
        {currentTabContent}
      </div>
    </div>
  );
};
