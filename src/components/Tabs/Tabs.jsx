export const Tabs = ({ tabs, selectedTab, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={selectedTabId === tab.id ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={selectedTabId !== tab.id ? () => {
                onTabSelected(tab);
              } : () => {
                onTabSelected('');
              }
              }
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div
      className="block"
      data-cy="TabContent"
    >
      {selectedTab.content}
    </div>
  </div>
);
