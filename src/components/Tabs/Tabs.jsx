import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              tab={tab}
              selectedTabId={selectedTabId}
              selected={selected}
              onTabSelected={onTabSelected}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selected.content}
      </div>
    </div>
  );
};
