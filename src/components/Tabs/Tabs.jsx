export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const hasTabId = tabs.some(el => el.id === selectedTabId);
  let correctSelectedTabId = selectedTabId;

  if (!hasTabId) {
    correctSelectedTabId = tabs[0].id;
  }

  return (
    <>
      <h1 className="title">
        Selected tab is
        {' '}
        {tabs.find(el => el.id === correctSelectedTabId).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={correctSelectedTabId === tab.id ? 'is-active' : ''}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={(event) => {
                      event.preventDefault();
                      if (tab.id !== correctSelectedTabId) {
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
          {tabs.find(el => el.id === correctSelectedTabId).content}
        </div>
      </div>
    </>
  );
};
