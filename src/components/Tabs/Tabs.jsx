import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul role="tablist">
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({ 'is-active': activeTab.id === id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== activeTab.id) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
