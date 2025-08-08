export const Tabs = ({ tabs, activeTabId, onTabSelected, selectedTab }) => {
  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tab.id === activeTabId ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
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
    </div>
  );
};
