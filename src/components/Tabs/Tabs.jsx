export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={selectedTab.id === tab.id && 'is-active'}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              onClick={() => {
                if (selectedTab.id !== tab.id) {
                  onTabSelected(tab);
                }
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
      {selectedTab.content}
    </div>
  </div>
);
