export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  function handleTabClick(activeTab) {
    if (activeTab !== selectedTab) {
      onTabSelected(activeTab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                className={
                  selectedTab === tab
                    ? 'is-active'
                    : ''
                }
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handleTabClick(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
