import cn from 'classnames';

export function Tabs({ tabs, selectedTab, onTabSelected }) {
  const createHandleTabClick = currentTub => () => {
    if (currentTub.id === selectedTab.id) {
      return;
    }

    onTabSelected(currentTub);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === selectedTab.id })}
            >
              <a
                href={`#${tab.id}`}
                onClick={createHandleTabClick(tab)}
                data-cy="TabLink"
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
}
