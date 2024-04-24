import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabContent = tabs[0].content;
  let displayTabId = activeTabId;

  if (!tabs.find(tab => tab.id === activeTabId)) {
    displayTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            if (displayTabId === tab.id) {
              tabContent = tab.content;
            }

            return (
              <li
                className={cn('', {
                  'is-active': tab.id === displayTabId,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== displayTabId) {
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
        {tabContent}
      </div>
    </div>
  );
};
