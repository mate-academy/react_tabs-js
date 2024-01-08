import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currTab = tabs.find(tab => tab.id === selectedTabId || tab[0]);

  const handleTabClick = (isTabCurr, tab) => {
    if (!isTabCurr) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isTabCurr = id === currTab.id;

            return (
              <li
                className={cn({
                  'is-actice': isTabCurr,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() =>
                    handleTabClick(isTabCurr, tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currTab.content}
      </div>
    </div>
  );
};
