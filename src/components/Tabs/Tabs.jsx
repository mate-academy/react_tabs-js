import classNames from 'classnames';

export const Tabs = ({ tab, selectedTab, setSelectedTab }) => {
  const { content } = tab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li
            className={classNames({ 'is-active': selectedTab === 'tab-1' })}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => {
                setSelectedTab('tab-1');
              }}
            >
              Tab 1
            </a>
          </li>

          <li
            className={classNames({ 'is-active': selectedTab === 'tab-2' })}
            data-cy="Tab"
          >
            <a
              href="#tab-2"
              data-cy="TabLink"
              onClick={() => {
                setSelectedTab('tab-2');
              }}
            >
              Tab 2
            </a>
          </li>

          <li
            className={classNames({ 'is-active': selectedTab === 'tab-3' })}
            data-cy="Tab"
          >
            <a
              href="#tab-3"
              data-cy="TabLink"
              onClick={() => {
                setSelectedTab('tab-3');
              }}
            >
              Tab 3
            </a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
