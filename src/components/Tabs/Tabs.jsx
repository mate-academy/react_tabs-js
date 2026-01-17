// import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidActiveTab = tabs.some(el => el.id === activeTabId);
  const resolvedActiveTabId = isValidActiveTab ? activeTabId : tabs[0].id; // визначаю валідний таб або перший беру з масиву
  const resolvedActiveTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === resolvedActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== resolvedActiveTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {resolvedActiveTab.content}
      </div>
    </div>
  );
};
