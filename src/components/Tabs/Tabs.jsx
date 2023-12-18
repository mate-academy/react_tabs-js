import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleTabSelect = (tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  const getSelectedTab =
    tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((e) => {
            const { id, title } = e;

            return (
              <li
                key={id}
                className={cn({ 'is-active': id === getSelectedTab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(e)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getSelectedTab.content}
      </div>
    </div>
  );
};
