import cn from 'classnames';

export function Tabs({ tabs, onTabSelected, activeTabId }) {
  const findTab = array => {
    return array.find(element => element.id === activeTabId);
  };

  const currentTab = findTab(tabs) || tabs[0];

  const handleOnTabSelected = tab => {
    if (tab.id !== currentTab.id) {
      onTabSelected(tab.id);
    }
  };

  return (
    <>
      <h1 className="title">Selected tab is {currentTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn({ 'is-active': currentTab.id === tab.id })}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  onClick={() => handleOnTabSelected(tab)}
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
          {currentTab.content}
        </div>
      </div>
    </>
  );
}
