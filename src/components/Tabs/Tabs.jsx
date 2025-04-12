import { Tab } from '../Tab';

export function Tabs({ tabs, activeTabId, onTabSelected }) {
  let activeTabIdOrDefault = activeTabId;

  if (!tabs.find(({ id }) => id === activeTabId)) {
    activeTabIdOrDefault = tabs[0].id;
  }

  const activeTab = tabs.find(({ id }) => id === activeTabIdOrDefault);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <Tab
              title={title}
              id={id}
              key={id}
              isActive={activeTabIdOrDefault === id}
              selectTab={() => onTabSelected(id)}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
}
