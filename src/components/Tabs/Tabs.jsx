export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(list => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
            <li
              className={activeTab.id === list.id ? 'is-active' : ''}
              data-cy="Tab"
              key={list.id}
              onClick={() => activeTabId !== list.id && onTabSelected(list.id)}
            >
              <a href={`#${list.id}`} data-cy="TabLink">
                {list.title}
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
