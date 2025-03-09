import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validatedId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({ 'is-active': validatedId === id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => (validatedId !== id ? onTabSelected(id) : false)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === validatedId)?.content}
      </div>
    </>
  );
};
