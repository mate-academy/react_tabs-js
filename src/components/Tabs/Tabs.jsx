export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={event => {
                  event.preventDefault();
                  if (tab.id === validTab.id) return;
                  onTabSelected(tab.id);
                }}
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
        {validTab.content}
      </div>
    </div>
  );
};
