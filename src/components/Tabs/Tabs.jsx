import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValid = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isValid ? activeTabId : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === currentActiveId;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': isActive })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();

                    if (!isActive) {
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
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
