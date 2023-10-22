import cn from 'classnames';

export const Tabs = ({ tabs, currentTab, onTabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === currentTab.id) || tabs[0];

  if (selectedTab === undefined) {
    // eslint-disable-next-line prefer-destructuring
    selectedTab = tabs[0];
  }

  const HandleClick = (tab) => {
    if (tab.id !== selectedTab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': selectedTab.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => HandleClick(tab)}
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
