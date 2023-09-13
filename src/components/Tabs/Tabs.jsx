import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <Tab
                tab={tab}
                onTabSelected={onTabSelected}
                isSelected={selectedTab.id === tab.id}
                key={tab.id}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
