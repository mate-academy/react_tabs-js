import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          tab={tab}
          isSelected={selectedTab === tab}
          onTabSelected={onTabSelected}
        />
      ))}
    </div>

    <div className="block" data-cy="TabContent">
      {`${selectedTab.content}`}
    </div>
  </div>
);
