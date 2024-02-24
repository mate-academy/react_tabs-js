import { Tab } from '../Tab';

export const Tabs = ({ tabs, activeTab, changeTabFromTabs }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <Tab
                key={tab.id}
                tab={tab}
                activeTab={activeTab}
                changeTabFromTab={e => {
                  changeTabFromTabs(e);
                }}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
