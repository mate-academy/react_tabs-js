import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(t => (
            <li
              data-cy="Tab"
              key={t.id}
              className={classNames({ 'is-active': t.id === activeTab.id })}
            >
              {t.id !== activeTab.id ? (
                <a
                  data-cy="TabLink"
                  href={`#${t.id}`}
                  onClick={() => onTabSelected(t.id)}
                >
                  {t.title}
                </a>
              ) : (
                <a data-cy="TabLink" href={`#${t.id}`}>
                  {t.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
