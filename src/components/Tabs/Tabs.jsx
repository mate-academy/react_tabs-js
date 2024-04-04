import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              onClick={() => {
                if (tab !== selectedTab) {
                  onTabSelected(tab);
                }
              }}
              className={cn({
                'is-active': tab === selectedTab,
              })}
              data-cy="Tab"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
