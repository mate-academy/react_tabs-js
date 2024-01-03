import { TabElement } from '../TabElement';

export const Tabs = ({
  tabsItem,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabsItem.find(tab => tab.id === selectedTabId)
    || tabsItem[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabsItem.map(
            item => (
              <TabElement
                key={item.id}
                tabItem={item}
                selectedTab={selectedTab}
                onSelectedTab={onTabSelected}
              />
            ),
          )}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
