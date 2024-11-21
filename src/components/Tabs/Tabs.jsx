import { TabsColumn } from './TabsColumn/TabsColumn';

export const findActiveTab = (tabs_, activeTabId) => {
  return tabs_.find(tab => tab.id === activeTabId) || tabs_[0];
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = findActiveTab(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabsColumn
              tab={tab}
              activeTab={activeTab}
              onTabSelected={onTabSelected}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
