import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const handleClick = tab => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = selectedTab.id === tab.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isTabSelected })}
                data-cy="Tab"
              >
                <a
                  onClick={() => handleClick(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
