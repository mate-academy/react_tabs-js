export const Tabs = ({ tabses, selectedTabId, onTabSelected }) => {
  const selectedTab = tabses.find(el => selectedTabId === el.id) || tabses[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabses.map(tab => (
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
