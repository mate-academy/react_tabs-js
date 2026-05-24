import cn from 'classnames';

export const Tabs = ({ tabs = [], activeTabId, onTabSelected }) => {
  const validTabId = tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === validTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== validTabId) onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(t => validTabId === t.id).content}
      </div>
    </>
  );
};
