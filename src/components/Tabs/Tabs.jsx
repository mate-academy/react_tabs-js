import cn from 'classnames';

export const Tabs = (
  { tabs,
    visibleTab,
    selectedTabId,
    onTabSelected },
) => {
  let selectTheTab = selectedTabId;

  if (!tabs.some(tab => tab.id === selectTheTab)) {
    selectTheTab = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === selectTheTab })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (selectTheTab !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectTheTab).content}
      </div>
    </div>
  );
};
