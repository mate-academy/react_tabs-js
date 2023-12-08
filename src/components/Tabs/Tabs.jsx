export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = tabs.find(el => el.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const onTabLinkClicked = () => {
              if (activeTab.id !== tab.id) {
                onTabSelected(tab);
              }
            };

            return (
              <li
                key={tab.id}
                className={activeTab.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={onTabLinkClicked}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
