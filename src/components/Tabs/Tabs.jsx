import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id: tabId, title: tabTitle }) => {
            const isActiveTab = activeTab.id === tabId;

            return (
              <li
                key={tabId}
                data-cy="Tab"
                className={classNames({ 'is-active': isActiveTab })}
              >
                <a
                  href={`#${tabId}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActiveTab) {
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
