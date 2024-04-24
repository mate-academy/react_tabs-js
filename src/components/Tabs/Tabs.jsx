export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isActive = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === isActive.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              {isActive.id === tab.id ? (
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              ) : (
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isActive.content}
      </div>
    </div>
  );
};
