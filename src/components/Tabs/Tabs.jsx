export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) return null;

  const activeId = tabs.find(t => t.id === activeTabId)
    ? activeTabId
    : tabs[0] && tabs[0].id;
  const activeTab = tabs.find(t => t.id === activeId) || tabs[0];
  const handleClick = (e, id) => {
    e.preventDefault();
    if (id !== activeId) onTabSelected(id);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === activeId;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={e => handleClick(e, tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};
