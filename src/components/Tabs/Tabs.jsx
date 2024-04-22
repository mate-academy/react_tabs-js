export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  if (selectTab.id === tab.id) {
                    return;
                  }
                  onTabSelected(tab.id);
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab.content}
      </div>
    </div>
  );
};
