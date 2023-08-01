import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabIdId,
  onTabSelected,
}) => {
  const selectedTabId = tabs.find(tab => tab.id === selectedTabIdId) || tabs[0];

  const handleClick = (newTab) => {
    if (newTab.id !== selectedTabIdId) {
      onTabSelected(newTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === selectedTabId.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId.content}
      </div>
    </div>
  );
};
