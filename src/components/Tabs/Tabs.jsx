import { Tab } from '../Tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const { id } = tabs;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              tab={tab}
              key={id}
              selectedTab={selectedTab}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
