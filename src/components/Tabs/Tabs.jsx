import classNames from 'classnames';

export const Tabs = ({
  tab,
  tabs,
  activeTabId = tabs[0].id,
  onTabSelected,
}) => {
  const { content } = tab;

  console.log('tab = ', tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            const { id, title } = item;

            return (
              <li
                className={classNames({ 'is-active': activeTabId === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    onTabSelected(id);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
