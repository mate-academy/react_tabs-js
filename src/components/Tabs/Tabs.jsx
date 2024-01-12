import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            tab={tab}
            isSelected={selectedTab === tab}
            onTabSelected={onTabSelected}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {`${selectedTab.content}`}
    </div>
  </div>
);
