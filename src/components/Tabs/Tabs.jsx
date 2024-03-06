import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  const fragmentIdentifier = window.location.hash;
  const tabId = fragmentIdentifier.substring(1);
  let activeTab = tabs.find(tabItem => tabItem.id === tabId);

  if (!activeTab) {
    window.location.hash = selectedTab.id;
    activeTab = tabs.find(tabItem => tabItem.id === selectedTab.id);
  }

  const clickHandler = (isSelected, tab) => {
    if (!isSelected) {
      window.location.hash = tab.id;
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const currentTab = activeTab || selectedTab || tabs[0];

            const isSelected = currentTab.id === tab.id;

            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={tab.id}
                className={classNames({ 'is-active': isSelected })}
                data-cy="Tab"
                onClick={() => clickHandler(isSelected, tab)}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
