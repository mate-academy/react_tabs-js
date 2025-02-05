import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let idActive = activeTabId;

  if (tabs.find(tab => tab.id === idActive) === undefined) {
    idActive = tabs[0].id;
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === idActive })}
              data-cy="Tab"
            >
              <a
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== idActive) {
                    onTabSelected(tab.id);
                  }
                }}
                href={`#${tab.id}`}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(t => t.id === idActive).content}
      </div>
    </>
  );
};
