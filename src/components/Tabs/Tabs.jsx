export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidTab = tabs.some(tab => tab.id === activeTabId);
  const activeTab = isValidTab ? activeTabId : tabs[0]?.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeTab) {
                    onTabSelected?.(tab.id); // Safely invoke the function
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
        {tabs.find(tab => tab.id === activeTab).content || ''}
      </div>
    </div>
  );
};
