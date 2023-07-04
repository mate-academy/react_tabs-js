import classNames from 'classnames';

const setId = id => `#${id}`;

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
  table,
}) => {
  const checkChange = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab || tabs[0]);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <a
                href={setId(tab.id)}
                data-cy="TabLink"
                onClick={() => checkChange(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {table.content}
      </div>
    </div>
  );
};
