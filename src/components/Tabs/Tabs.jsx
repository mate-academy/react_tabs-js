import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const clickHandler = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => clickHandler(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
