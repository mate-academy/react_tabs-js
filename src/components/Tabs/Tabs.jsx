import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, setTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            const changeTab = () => {
              if (selectedTab !== id) {
                setTab(tab);
              }
            };

            return (
              <li
                key={id}
                className={cn({ 'is-active': selectedTabId === id })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={changeTab}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
