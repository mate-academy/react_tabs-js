import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const confirmedTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;
  const selectedTabContent = tabs
    .find(({ id }) => id === confirmedTabId).content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = id === confirmedTabId;

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
        {selectedTabContent}
      </div>
    </div>
  );
};
