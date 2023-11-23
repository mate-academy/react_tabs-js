import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isSelectedTabIdCorrect = tabs
    .some(tab => tab.id === selectedTabId) ? selectedTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === isSelectedTabIdCorrect })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (tab.id !== isSelectedTabIdCorrect) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === isSelectedTabIdCorrect).content}
      </div>
    </div>
  );
};
