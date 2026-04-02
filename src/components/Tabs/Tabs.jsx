import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValid = tabs.some(tab => tab.id === activeTabId);
  const safeActiveTabId = isValid ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === safeActiveTabId })}
              data-cy="Tab"
            >
              <a
                href={'#' + tab.id}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== safeActiveTabId && onTabSelected(tab.id)
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === safeActiveTabId)?.content}
      </div>
    </div>
  );
};
