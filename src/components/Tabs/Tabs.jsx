import cn from 'classnames';

export const Tabs = ({
  tabs,
  // selectedTabId,
  selectedTab,
  onTabSelected,
}) => {
  const selectedContent = tabs.find(tab => tab.id === selectedTab.id).content;

  // function startOnTabSelected(tab) {
  //   if (tab.id !== selectedTab.id) {
  //     onTabSelected(tab);
  //   }
  // }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': (selectedTab.id === tab.id),
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => {
                  if (tab.id !== selectedTab.id) {
                    onTabSelected(tab);
                  }
                }}
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
        {selectedContent}
      </div>
    </div>
  );
};
