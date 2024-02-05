import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  function selectNew(newTab) {
    if (newTab.id !== selectedTab.id) {
      onTabSelected(newTab);
    }
  }

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {'\u00A0'}
        {selectedTab.title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({ 'is-active': tab.id
                  === selectedTab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => selectNew(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
