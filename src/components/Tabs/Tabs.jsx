export const Tabs = ({ tabs, activeTabId, onTabSelected, displayTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? 'is-active' : undefined}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  () => onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {displayTab.content}
      </div>
    </div>
  );
};
