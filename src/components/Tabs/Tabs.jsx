export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
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
              onClick={() => {
                if (selectedTabId !== undefined && selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
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
      {tabs.find(tab => tab.id === selectedTabId)}
    </div>
  </div>
);
