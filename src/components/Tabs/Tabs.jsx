import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = currentTab.id === id;

            return (
              <li
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isSelected && onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
          ;

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
