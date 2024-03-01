import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabs, onSelectedTabs }) => {
  const selectTab = (isTabSelected, tab) => {
    if (!isTabSelected) {
      onSelectedTabs(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = tab.id === selectedTabs.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isTabSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => selectTab(isTabSelected, tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabs.content}
      </div>
    </div>
  );
};
