import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const changeTab = (selectedId, tab) => {
    if (selectedId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              key={el.id}
              data-cy="Tab"
              className={cn({
                'is-active': selectedTabId === el.id,
              })}
            >
              <a
                href={`#${el.id}`}
                data-cy="TabLink"
                onClick={e => changeTab(selectedTabId, el)}
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(el => el.id === selectedTabId).content || tabs[0].content}
      </div>
    </div>
  );
};
