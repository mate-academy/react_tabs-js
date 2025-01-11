export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidId = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={isValidId.id === tab.id ? 'is-active' : null}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  tab.id !== isValidId.id
                    ? () => onTabSelected(tab.id, tab.title)
                    : null
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {isValidId.content}
      </div>
    </div>
  );
};
