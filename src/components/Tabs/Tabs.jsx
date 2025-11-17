export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  // Якщо tabs пустий — рендеримо нічого (важливо для стабільності)
  if (!tabs.length) {
    return null;
  }

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeTab?.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();

                  if (tab.id !== activeTab?.id) {
                    onTabSelected?.(tab.id);
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
        {activeTab?.content}
      </div>
    </div>
  );
};
