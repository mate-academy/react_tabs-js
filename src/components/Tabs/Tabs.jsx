export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTabContent;

  let activeTabIdValidated = activeTabId;

  if (!tabs.some(tab => tab.id === activeTabId)) {
    activeTabIdValidated = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => {
            const isActive = id === activeTabIdValidated;
            let handleClick = () => onTabSelected(id);

            if (isActive) {
              activeTabContent = content;
              handleClick = null;
            }

            return (
              <li
                key={id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a href={`#${id}`} data-cy="TabLink" onClick={handleClick}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};
