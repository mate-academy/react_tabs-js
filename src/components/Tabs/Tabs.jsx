export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const textByTabId = tabs.find(tab => tab.id === activeTabId)?.content;
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={`${tab.id === activeTabId ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              <a href={tab.id} data-cy="TabLink" onClick={() => onTabSelected(tab.id)}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {textByTabId}
      </div>
    </div>
  );
};
