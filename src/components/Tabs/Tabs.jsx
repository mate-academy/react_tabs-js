export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeSelectTab = tabs.find(tab => activeTabId === tab.id) || tabs[0];

  const onClick = tab => {
    if (activeSelectTab.id !== tab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={activeSelectTab.id === tab.id && 'is-active'}
              data-cy="Tab"
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => onClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeSelectTab.content}
      </div>
    </div>
  );
};
