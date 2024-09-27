import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const handleTab = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active': currentActiveTab?.id === id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  onClick={() => handleTab(id)}
                  defaultValue={id}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentActiveTab.content}
      </div>
    </div>
  );
};
