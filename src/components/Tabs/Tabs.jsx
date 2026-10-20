export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={
                activeTabId === tab.id ||
                (tab.id === tabs[0].id &&
                  !tabs.map(tab1 => tab1.id).includes(activeTabId))
                  ? 'is-active'
                  : ''
              }
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {
          (tabs.map(tab1 => tab1.id).includes(activeTabId)
            ? tabs.find(tab => tab.id === activeTabId)
            : tabs[0]
          ).content
        }
      </div>
    </div>
  );
};
