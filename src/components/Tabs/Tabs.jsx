export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={tab.id === selectedTab.id ? 'is-active' : ''}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              onClick={() => tab.id !== selectedTab.id && onTabSelected(tab)}
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
