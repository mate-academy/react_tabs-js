import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedId,
  onSelectedTab,
}) => {
  const selectedTabId = tabs.find(tab => tab.id === selectedId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectedId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedId !== tab.id) {
                    onSelectedTab(tab);
                  }
                }}
              >
                {`${tab.id}`}
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
