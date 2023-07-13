import cn from 'classnames';

export const Tabs = ({ tab, selectedTabId, onTabSelected }) => {
  const tabClick = (t) => {
    if (selectedTab.id !== t.id) {
      onTabSelected(t);
    }
  };

  const selectedTab = tab.find(t => selectedTabId === t.id) || tab[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tab.map(t => (
            <li
              className={cn(selectedTab === t.id && 'is-active')}
              data-cy="Tab"
              key={t.id}
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(t)}
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
