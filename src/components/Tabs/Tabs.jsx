import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            onTabSelected={onTabSelected}
            selectedTabId={selectedTabId}
            tab={tab}
            tabs={tabs}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);
