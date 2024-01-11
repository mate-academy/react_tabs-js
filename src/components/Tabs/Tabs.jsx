import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const onClickHandler = (tab) => {
    if (tab !== selectedTab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={classNames('', {
                  'is-active': tab === selectedTab,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => onClickHandler(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}

          {/* <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">Tab 2</a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">Tab 3</a>
          </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
