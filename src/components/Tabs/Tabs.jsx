import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  currentTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const { id, title } = tab;

          const linkHandler = () => {
            if (selectedTabId !== id) {
              onTabSelected(id);
            }
          };

          return (
            <li
              className={classNames({
                'is-active': selectedTabId === id,
              })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={linkHandler}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {currentTab.content}
    </div>
  </div>
);
