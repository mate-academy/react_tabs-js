import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab =
    tabs.find(visibleGood => visibleGood.id === activeTabId) || tabs[0];

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(good => (
          <li
            data-cy="Tab"
            key={good.id}
            className={cn({ 'is-active': good.id === currentTab.id })}
          >
            <a
              data-cy="TabLink"
              href={`#${good.id}`}
              onClick={() => {
                if (good.id !== currentTab.id) {
                  onTabSelected(good.id);
                }
              }}
            >
              {good.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
