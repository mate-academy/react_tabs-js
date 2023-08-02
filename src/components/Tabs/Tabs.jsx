import cn from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handlerSelector = (event, tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id: tabId, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={tabId}
                className={cn({
                  'is-active': selectedTab.id === tabId,
                })}
              >
                <a
                  href={`#${tabId}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    handlerSelector(event, tab);
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
        {selectedTab.content}
      </div>
    </div>
  );
};
