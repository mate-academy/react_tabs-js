export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = selectedTab.id === tab.id;

            return (
              <li
                key={tab.id}
                className={isTabSelected ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (!isTabSelected) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
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
};
