import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const tabId = tabs.find(el => el.id === selectedTabId) === undefined
    ? tabs[0].id
    : selectedTabId;

  return (
    <>
      <h1 className="title">
        Selected tab is
        {' '}
        {tabs.find(el => el.id === tabId).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={cn({ 'is-active': tabId === tab.id })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={(event) => {
                      event.preventDefault();
                      if (tab.id !== tabId) {
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
          {tabs.find(el => el.id === tabId).content}
        </div>
      </div>
    </>
  );
};
