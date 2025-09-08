import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Guard against empty tabs array first
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

  const resolvedActiveId =
    tabs.find(t => t.id === activeTabId)?.id ?? tabs[0]?.id;

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
