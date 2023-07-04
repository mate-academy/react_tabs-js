import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTabId = tabs.find(tab => tab.id === selectedTabId)?.id
    || tabs[0].id;

  const getVisibleContent = (listOfTabs) => {
    const preparedContent = listOfTabs.find(tab => tab.id === currentTabId);

    return preparedContent.content;
  };

  const visibleContent = getVisibleContent(tabs);

  return (
    <div
      data-cy="TabsComponent"
    >
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': currentTabId === tab.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  if (currentTabId !== tab.id) {
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

      <div className="block" data-cy="TabContent">
        {visibleContent}
      </div>
    </div>
  );
};
