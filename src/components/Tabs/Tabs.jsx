import cn from 'classnames';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {

  const activeTab =
    Array.isArray(tabs) && tabs.length > 0
      ? tabs.find(t => t.id === activeTabId) || tabs[0]
      : null;

  if (!activeTab) {
    return null;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              key={t.id}
              className={cn({
                'is-active': t.id === activeTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (t.id !== activeTab.id) onTabSelected(t.id);
                }}
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
