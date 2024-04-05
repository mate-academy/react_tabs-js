import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab, selectedTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
              className={cn({
                'is-active': tab.id === selectedTabId,
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
        {selectedTab?.content}
      </div>
    </div>
  );
};
