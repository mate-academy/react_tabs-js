import { getActiveTab } from '../../helpers/tabsHelpers';
import { Li } from './TabItem';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const activeTab = getActiveTab(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Li
              tab={tab}
              key={tab.id}
              activeTabId={activeTab.id}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
