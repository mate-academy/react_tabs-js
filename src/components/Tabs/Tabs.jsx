export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={selectedTab === tab.id && 'is-active'}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => onTabSelected(tab)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTab)?.content}
    </div>
  </div>
);
