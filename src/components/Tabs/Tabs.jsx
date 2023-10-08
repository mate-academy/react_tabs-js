import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const handleTabClick = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelected = selectedTab.id === tab.id;

            return (
              <li
                className={classNames({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handleTabClick(tab);
                  }}
                >
                  {tab.title}
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
  )
};
