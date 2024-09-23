export function Tabs({ tabs, onTabSelected, activeTabId }) {
  const findTab = array => {
    return array.find(element => element.id === activeTabId);
  };

  const currentTab = findTab(tabs) || tabs[0];

  return (
    <>
      <h1 className="title">Selected tab is {currentTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={currentTab.id === tab.id ? 'is-active' : ''}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (tab.id !== currentTab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    </>
  );
}
