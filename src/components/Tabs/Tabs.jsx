import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {

  const visibleTab = tabs.find(el => el === selectedTabId) === undefined
    ? tabs[0]
    : selectedTabId;

  return (
    <>
      <h1 className="title">
        Selected tab is
        {' '}
        {visibleTab.title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={cn({ 'is-active': visibleTab.id === tab.id })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={(event) => {
                      event.preventDefault();
                      if (tab.id !== visibleTab.id) {
                        onTabSelected(tab);
                      }
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {visibleTab.content}
        </div>
      </div>
    </>
  );
};
