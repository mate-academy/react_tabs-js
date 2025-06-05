import { Tab } from '../Tab';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTabId={validTab.id}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validTab.content}
      </div>
    </div>
  );
};
