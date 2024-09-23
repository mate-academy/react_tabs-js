import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let correctId = activeTabId;

  if (!tabs.some(item => item.id === correctId)) {
    correctId = tabs[0].id;
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            return (
              <li
                key={item.id}
                className={classNames({ 'is-active': correctId === item.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${item.id}`}
                  data-cy="TabLink"
                  onClick={() =>
                    item.id !== correctId && onTabSelected(item.id)
                  }
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(item => item.id === correctId).content}
      </div>
    </>
  );
};
