import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId: rawActiveTabId, onTabSelected }) => {
  const activeTabId = tabs.find(tab => tab.id === rawActiveTabId)
    ? rawActiveTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({
                'is-active': id === activeTabId,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== activeTabId) onTabSelected(id);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId).content}
      </div>
    </div>
  );
};
