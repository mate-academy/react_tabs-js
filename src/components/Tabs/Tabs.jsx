import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected,
}) => {
  const handleTabClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isActive
            = (!tabs.some(item => item.id === selectedTabId) && tabs[0] === tab)
            || selectedTabId === tab.id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': isActive })}
              >
                <a
                  data-cy="TabLink"
                  href={`#${id}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
      </div>
    </div>
  );
};
