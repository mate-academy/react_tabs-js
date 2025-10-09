export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
    if (!tabs.length) return null;
  
    // вычисляем активный таб с fallback на первый
    const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
    const resolvedTabId = activeTab.id;
  
    const handleClick = (event, id) => {
      event.preventDefault();
      if (id === resolvedTabId) return;
      onTabSelected(id);
    };
  
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={resolvedTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => handleClick(event, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    );
  };