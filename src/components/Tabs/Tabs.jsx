import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isTabIdValid = tabs.some(tab => tab.id === activeTabId);

  const safeActiveTab = isTabIdValid
    ? tabs.find(tab => tab.id === activeTabId)
    : tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const isActive = isTabIdValid
              ? tab.id === activeTabId
              : index === 0;

            return (
              <li
                className={classNames({ 'is-active': isActive })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(tab.id);
                    }
                  }}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {safeActiveTab.content}
      </div>
    </div>
  );
};
