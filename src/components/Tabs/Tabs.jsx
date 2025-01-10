import classNames from 'classnames';

export const Tabs = ({ tabs, setSelectedTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('no-active', {
                'is-active': tab.id === setSelectedTabId,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault(); // Prevent default anchor behavior
                  onTabSelected(tab); // Pass the selected tab to the callback
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === setSelectedTabId)?.content}
      </div>
    </div>
  );
};
