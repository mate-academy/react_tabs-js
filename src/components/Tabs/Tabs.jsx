import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames({
                  'is-active':
                    tab.id ===
                    (tabs.find(t => t.id === activeTabId)
                      ? activeTabId
                      : tabs[0].id),
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={event => {
                    event.preventDefault();
                    if (tab.id !== activeTabId) {
                      onTabSelected(tab.id);
                    }
                  }}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === activeTabId) || tabs[0]).content}
      </div>
    </div>
  );
};
