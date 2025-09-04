export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              className={`${id === activeTab.id ? 'is-active' : ''}`}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                onClick={() => id !== activeTabId && onTabSelected(id)}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(el => el.id === activeTabId)?.content}
      </div>
    </div>
  );
};
