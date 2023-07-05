import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentSelection = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  const handleTabSelect = tab => (
    currentSelection.id !== tab.id && onTabSelected(tab)
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn(
                { 'is-active': tab.id === currentSelection.id },
              )}
            >
              <a
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
                href={`#${tab.id}`}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentSelection.content}
      </div>
    </div>
  );
};
