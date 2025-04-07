export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId).content}
      </div>
    </div>
  );
};
