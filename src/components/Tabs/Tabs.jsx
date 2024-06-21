import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // let incorrect = 0;

  // tabs.map(tab => {
  //   if (tab.id !== activeTabId) {
  //     incorrect += 1;
  //   }
  // });

  // if (incorrect === tabs.length) {
  //   activeTabId = tabs[0].id;
  // }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': activeTabId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {tabs.map(tab => {
        if (tab.id === activeTabId) {
          return (
            <div className="block" data-cy="TabContent" key={tab.content}>
              {tab.content}
            </div>
          );
        }

        return null;
      })}
    </>
  );
};
