export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidTab = tabs.some(tab => tab.id === activeTabId);
  const currentTabId = isValidTab ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              key={el.id}
              className={currentTabId === el.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                onClick={event => {
                  event.preventDefault();
                  if (el.id !== currentTabId) {
                    onTabSelected(el.id);
                  }
                }}
                href={`#${el.id}`}
                data-cy="TabLink"
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => tab.id === currentTabId && tab.content)}
      </div>
    </div>
  );
};
