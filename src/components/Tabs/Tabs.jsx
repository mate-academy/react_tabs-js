import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const confirmedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = id === confirmedTab.id;

            return (
              <li
                key={id}
                className={cn(
                  { 'is-active': isSelected },
                )}
                data-cy="Tab"
              >
                <a
                  onClick={() => !isSelected && onTabSelected(tab)}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {confirmedTab.content}
      </div>
    </div>
  );
};
