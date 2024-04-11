export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const notSelected = id => selectedTabId !== id;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={id === selectedTab.id ? 'is-active' : null}
                data-cy="Tab"
                id="id"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => notSelected(id) && onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
