import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const setOnClick = tab => selectedTab.id !== tab.id && onTabSelected(tab);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              key={tabs.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setOnClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabsComponent">
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
