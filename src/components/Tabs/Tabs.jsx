export const Tabs = ({ activeTabId, tabs, onTabSelected }) => {
  if (!tabs.findIndex(tab => tab.id === activeTabId < 0)) {
    onTabSelected(tabs[0].id);
  }
  const content = tabs.find(tab => tab.id === activeTabId).content;

  console.log(activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={tab.id === activeTabId ? 'is-active' : null}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    if (!event.target.href.includes(activeTabId)) {
                      onTabSelected(tab.id);
                    }
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
        {content}
      </div>
    </div>
  );
};
