import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id: TabId, title: tabTitle }) => {
            const isActiveTab = activeTab.id === TabId;

            return (
              <li
                key={TabId}
                data-cy="Tab"
                className={cn({ 'is-active': isActiveTab })}
              >
                <a
                  href={`#${TabId}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActiveTab) {
                      onTabSelected(TabId);
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
