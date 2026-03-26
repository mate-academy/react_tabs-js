import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validActiveTabId = tabs.some(tab => activeTabId === tab.id)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({
                  'is-active': tab.id === validActiveTabId,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== validActiveTabId) {
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

      {tabs.map(tab => {
        if (tab.id === validActiveTabId) {
          return (
            <div key={tab.id} className="block" data-cy="TabContent">
              {tab.content}
            </div>
          );
        }

        return '';
      })}
    </div>
  );
};
