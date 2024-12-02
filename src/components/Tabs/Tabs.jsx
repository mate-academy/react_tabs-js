import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(elem => elem.id === activeTabId) || tabs[0];

  return (
    <>
      <ul className="tabs is-boxed">
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn({ 'is-active': tab.id === activeTab.id })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== activeTab.id) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};
