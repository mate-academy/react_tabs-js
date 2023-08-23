import classNames from 'classnames';

export const Tabs = ({
  selectedTabId,
  onTabSelected,
  tabs,
}) => {
  const initialTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const tabContent = tabs.find(({ id }) => id === initialTabId).content;

  const selectTabHandler = (tab) => {
    if (tab.id !== initialTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': initialTabId === tab.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTabHandler(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
