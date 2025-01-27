export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              className={`${(tabs.some(t => t.id === activeTabId) ? activeTabId : tabs[0].id) === tab.id ? 'is-active' : ''}`}
              data-cy="Tab"
              onClick={() => activeTabId !== tab.id && onTabSelected(tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => activeTabId === tab.id)?.content}
      </div>
    </div>
  );
};
