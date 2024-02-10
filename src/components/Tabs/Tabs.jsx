import classNames from 'classnames';

export const Tabs = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab.id !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                { tab.title }
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { selectedTab.content }
      </div>
    </div>
  );
};
