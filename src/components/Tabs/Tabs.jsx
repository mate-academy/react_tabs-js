import { Tab } from '../Tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <Tab
            tab={tab}
            selectedTab={selectedTab}
            onTabSelected={onTabSelected}
            key={tab.id}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
