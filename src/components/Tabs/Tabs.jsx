import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeId = activeTabId;

  if (!tabs.some(tab => tab.id === activeId)) {
    activeId = tabs[0].id;
  }

  const activeTab = tabs.find(tab => tab.id === activeId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === activeId })}
              onClick={tab.id !== activeId ? () => onTabSelected(tab.id) : null}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
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
