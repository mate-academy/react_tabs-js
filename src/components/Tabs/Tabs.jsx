import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabValidator =
    !activeTabId || !tabs.some(({ id }) => id === activeTabId)
      ? tabs[0].id
      : activeTabId;

  const activeTabContent = tabs.filter(({ id }) => id === activeTabValidator)[0]
    .content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            const isActive = activeTabValidator === id;

            const handleClick = event => {
              if (!event.target.closest('li').className.includes('is-active')) {
                onTabSelected(id);
              }
            };

            return (
              <li
                key={id}
                className={classNames({ 'is-active': isActive })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={event => handleClick(event)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </div>
  );
};
