import cn from 'classnames';

export const Tabs = ({ tabs, tabName, sortBy }) => {
  const isSelected = tab => {
    if (tab !== tabName) {
      sortBy(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({ 'is-active': tabName.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  onClick={() => isSelected(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  key={tab.id}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabName.content}
      </div>
    </div>
  );
};
