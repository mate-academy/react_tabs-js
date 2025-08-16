import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabId;

  if (tabs.find(a => a.id === activeTabId)) {
    tabId = activeTabId;
  } else {
    tabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(a => (
            <li key={a.id} className={cn({ 'is-active': a.id === tabId })} data-cy="Tab">
              <a
                href={`#${a.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (a.id !== tabId) {
                    onTabSelected(a.id);
                  }
                }}
              >
                {a.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(a => a.id === tabId).content}
      </div>
    </div>
  );
};
