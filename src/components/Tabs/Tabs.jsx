import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const tabTitle = tab.title;
            const tabId = tab.id;

            return (
              <li
                key={tabId}
                data-cy="Tab"
                className={cn({
                  'is-active': tabId === activeTab.id,
                })}
              >
                <a
                  href={`#${tabId}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tabId !== activeTab.id) {
                      onTabSelected(tabId);
                    }
                  }}
                >
                  {tabTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
