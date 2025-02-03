import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTabIdChecked = activeTabId;

  if (tabs.findIndex(tab => tab.id === activeTabId) === -1) {
    activeTabIdChecked = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === activeTabIdChecked,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  if (
                    event.target.getAttribute('href').replace('#', '') !==
                    activeTabIdChecked
                  ) {
                    onTabSelected(
                      event.target.getAttribute('href').replace('#', ''),
                    );
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabIdChecked).content ?? ''}
      </div>
    </div>
  );
};
