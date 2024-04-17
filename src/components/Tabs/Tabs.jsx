import cn from 'classnames';
// eslint-disable-next-line import/no-cycle

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
              <li
                key={tabs.indexOf(tab)}
                onClick={() => onTabSelected(tab)}
                className={cn({ 'is-active': tab === selectedTab })}
                data-cy="Tab"
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
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
