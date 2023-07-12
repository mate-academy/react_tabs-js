export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let selectedTab = tabs.find(el => selectedTabId === el.id);

  selectedTab = selectedTab || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTab.id === tab.id && 'is-active'}
              data-cy="Tab"
              key={tab.id}
              onClick={() => {
                if (selectedTab.id !== tab.id) {
                  onTabSelected(tab);
                }
              }}
              role="presentation"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
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
};
