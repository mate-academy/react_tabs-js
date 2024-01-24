export const Tabs = ({ tabs, selectedTab, onTabSelected: setTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={selectedTab.id === tab.id ? 'is-active' : null}
            data-cy="Tab"
          >
            <a
              onClick={() => selectedTab.id !== tab.id && setTab(tab)}
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
      {selectedTab.content}
    </div>
  </div>
);
