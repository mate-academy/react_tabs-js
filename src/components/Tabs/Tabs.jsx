import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let correctTabId = selectedTabId;
  const ids = tabs.map(tab => tab.id);

  if (!ids.includes(correctTabId)) {
    correctTabId = tabs[0].id;
  }

  const visibleTab = tabs.find(tab => tab.id === correctTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({
                  'is-active': id === correctTabId,
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    correctTabId !== id && onTabSelected(tab)
                  )}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleTab.content}
      </div>
    </div>
  );
};
