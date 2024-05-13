import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const getCorrectedTabId = (allTabs, tabId) => {
    return allTabs.some(({ id }) => id === tabId) ? tabId : allTabs[0].id;
  };

  const correctActiveTabId = getCorrectedTabId(tabs, activeTabId);

  const handleActiveTab = tab => {
    if (tab.id !== correctActiveTabId) {
      return () => onTabSelected(tab.id);
    }

    return undefined;
  };

  const getActiveTabContent = () => {
    const activeTabIndex = tabs.findIndex(tab => tab.id === correctActiveTabId);

    return tabs[activeTabIndex].content;
  };

  const activeTabContent = getActiveTabContent();

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': tab.id === correctActiveTabId })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={handleActiveTab(tab)}
                >
                  {tab.title}
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
