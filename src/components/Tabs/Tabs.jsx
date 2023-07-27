import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let preparedSelectedId = selectedTabId;

  if (!tabs.find(tab => tab.id === selectedTabId)) {
    preparedSelectedId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': preparedSelectedId === tab.id })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => (preparedSelectedId === tab.id
                    ? null
                    : onTabSelected(tab))}
                >
                  {tab.title}
                </a>
              </li>
              {preparedSelectedId === tab.id && (
                <div className="block" data-cy="TabContent">
                  {tab.content}
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
