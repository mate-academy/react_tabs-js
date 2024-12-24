import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <Tab
                tab={tab}
                key={tab.id}
                onTabSelected={onTabSelected}
                activeTabId={activeTab}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabId.content}
      </div>
    </div>
  );
};
