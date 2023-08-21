import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabsList, onTabSelected, selectedTabId }) => {
  const isSelected = tab => selectedTabId === tab.id;
  const selectedTab = tabsList.find(tab => tab.id === selectedTabId)
  || tabsList[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabsList.map(tab => (
              <Tab
                tab={tab}
                key={tab.id}
                isSelected={isSelected}
                onTabSelected={onTabSelected}
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
