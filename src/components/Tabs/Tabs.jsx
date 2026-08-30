import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  const handleTabClick = (tabId) => {
    if (tabId !== activeTab?.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab?.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {activeTab && (
        <div data-cy="TabContent" className="block">
          {activeTab.content}
        </div>
      )}
    </>
  );
};