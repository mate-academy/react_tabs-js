export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const handleTabClick = (tab) => {
    if (selectedTab !== tab) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                className={selectedTab === tab ? "is-active" : ""}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab)}
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
