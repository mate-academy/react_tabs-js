export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(t => t.id === activeTabId) || tabs[0];
  const handleClick = (e, id) => {
    e.preventDefault();

    if (id !== active.id) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === active.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
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
        {active.content}
      </div>
    </div>
  );
};
