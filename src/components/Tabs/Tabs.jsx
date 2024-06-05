import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs.some(tab => tab.id === activeTabId)) {
    // eslint-disable-next-line no-param-reassign
    activeTabId = tabs[0].id;
  }

  const { content } = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': activeTabId === tab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() =>
                  activeTabId !== tab.id ? onTabSelected(tab.id) : ''
                }
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
