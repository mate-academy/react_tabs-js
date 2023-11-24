import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs
    .find(tab => tab.id === selectedTabId)
    || tabs[0];

  const checkIfTabChanged = tab => (
    (tab.id !== selectedTabId) && onTabSelected(tab)
  );

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${currentTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title, content }) => (
              <li
                className={cn({ 'is-active': id === selectedTabId })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => checkIfTabChanged({ id, title, content })}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    </div>
  );
};
