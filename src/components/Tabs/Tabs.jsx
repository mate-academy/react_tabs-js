export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const isActiveTabValid = tabs.some(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            return (
              <li
                className={`${(!isActiveTabValid && index === 0) || activeTabId === tab.id ? 'is-active' : ''}`}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeTabId === tab.id) {
                      return;
                    }

                    onTabSelected(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => activeTabId === tab.id) ?? tabs[0]).content}
      </div>
    </div>
  );
};
