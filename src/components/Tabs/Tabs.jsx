import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const resolvedActiveId =
    tabs.find(t => t.id === activeTabId)?.id ?? tabs[0]?.id;

  // Guard against empty tabs array
  if (!tabs || tabs.length === 0) {
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul />
        </div>
        <div className="block" data-cy="TabContent" />
      </div>
    );
  }

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={cn({ 'is-active': tab.id === resolvedActiveId })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (tab.id !== resolvedActiveId) {
                        onTabSelected(tab.id);
                      }

                      if (!tabs.find(el => el.id === tab.id)) {
                        onTabSelected(tabs[0].id);
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
          {resolvedActiveId
            ? tabs.find(el => el.id === resolvedActiveId)?.content || ''
            : ''}
        </div>
      </div>
    </>
  );
};
