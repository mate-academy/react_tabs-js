export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabValidator =
    !activeTabId || !tabs.some(tab => tab.id === activeTabId)
      ? tabs[0].id
      : activeTabId;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = activeTabValidator === tab.id;

            return (
              <li
                key={tab.id}
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    if (
                      !event.target
                        .closest('li')
                        .className.includes('is-active')
                    ) {
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
        {tabs.filter(tab => tab.id === activeTabValidator)[0].content}
      </div>
    </div>
  );
};
