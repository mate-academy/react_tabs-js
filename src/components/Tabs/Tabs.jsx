import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isTabExist = tabs.some(tab => tab.id === selectedTabId);

  if (!isTabExist && tabs.length > 0) {
    // eslint-disable-next-line no-param-reassign
    selectedTabId = tabs[0].id;
    onTabSelected(tabs[0]);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn('', {
                'is-active': selectedTabId === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
