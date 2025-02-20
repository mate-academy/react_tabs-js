import { Tab } from '../Tab';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const getSelectedTabContent = (tabsList, tabId) => {
    const getTabContent = tabsList.find(tab => tab.id === tabId);

    return getTabContent.content;
  };

  function checkAvailableTabId(id) {
    const isInTabs = tabs.find(tab => tab.id === id);

    if (isInTabs === undefined) {
      return tabs[0].id;
    }

    return id;
  }

  const selectedTabContent = getSelectedTabContent(
    tabs,
    checkAvailableTabId(activeTabId),
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTabId={checkAvailableTabId(activeTabId)}
              // activeTabId={checkAvailiableTabId(activeTabId)}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
