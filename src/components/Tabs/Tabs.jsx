import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const initialTab = tabs.find(tab => tab.id === selectedTab) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = id === initialTab.id;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
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
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {initialTab.content}
      </div>
    </div>
  );
};
