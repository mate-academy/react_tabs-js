import cl from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const actualTabId = tabs.some(tab => selectedTabId === tab.id)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { title, id } = tab;
            const isActive = actualTabId === id;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={cl({ 'is-active': isActive })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (isActive ? null : onTabSelected(tab))}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => actualTabId === tab.id).content}
      </div>
    </div>
  );
};
