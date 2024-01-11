import cn from 'classnames';

export const Tabs = ({ tabsProp, onTabSelected, selectedTab }) => {
  const handleClick = (elem) => {
    if (elem !== selectedTab) {
      onTabSelected(elem);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabsProp.map(tab => (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': tab.id === selectedTab.id })}
                key={tab.id}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
