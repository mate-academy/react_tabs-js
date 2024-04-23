import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let correctActiveTabId = activeTabId;

  if (!tabs.some(tab => tab.id === activeTabId)) {
    correctActiveTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': tab.id === correctActiveTabId })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={
                    tab.id !== correctActiveTabId
                      ? () => onTabSelected(tab.id)
                      : undefined
                  }
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs[tabs.findIndex(tab => tab.id === correctActiveTabId)].content}
      </div>
    </div>
  );
};
