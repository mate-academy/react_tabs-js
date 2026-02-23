export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isIdValid = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isIdValid ? activeTabId : tabs[0]?.id;
  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              className={tab.id === currentActiveId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
              onClick={event => {
                if (activeTabId !== tab.id) {
                  event.preventDefault();
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
        {activeTab?.content}
      </div>
    </>
  );
};
