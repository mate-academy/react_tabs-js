export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isActive = selectedTab === tab;

          return (
            // eslint-disable-next-line
            <li
              className={isActive ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
              onClick={() => {
                if (!isActive) {
                  onTabSelected(tab);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
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
