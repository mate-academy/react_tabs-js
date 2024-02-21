export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isTabSelected = selectedTab.id === id;

            return (
              <li
                className={isTabSelected ? 'is-active' : ''}
                data-cy="Tab"
                key={id}
              >
                <a
                  onClick={() => {
                    if (!isTabSelected) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`#${id}`}
                  data-cy="TabLink"
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
