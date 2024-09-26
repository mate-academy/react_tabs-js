export const Tabs = ({ activeTabId, onTabSelected, tabs }) => {
  const currentId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${tab.id === currentId && 'is-active'}`}
              data-cy="Tab"
            >
              <a
                onClick={() => tab.id !== currentId && onTabSelected(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.filter(tab => tab.id === currentId)[0].content}
      </div>
    </div>
  );
};
