export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              data-cy="Tab"
              key={item.id}
              className={item.id === validActiveTabId ? 'is-active' : ''}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() =>
                  activeTabId !== item.id && onTabSelected(item.id)
                }
              >
                {item.title}
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
