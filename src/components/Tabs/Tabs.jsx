import cn from 'classnames';

export const Tabs = ({ setTab, tab, tabs }) => {
  const { content } = tabs.find(el => el.id === tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <li
            className={cn({
              'is-active': tab === 'tab-1',
            })}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => setTab('tab-1')}
            >
              Tab 1
            </a>
          </li>

          <li
            data-cy="Tab"
            className={cn({
              'is-active': tab === 'tab-2',
            })}
          >
            <a
              href="#tab-2"
              data-cy="TabLink"
              onClick={() => setTab('tab-2')}
            >
              Tab 2
            </a>
          </li>

          <li
            data-cy="Tab"
            className={cn({
              'is-active': tab === 'tab-3',
            })}
          >
            <a
              href="#tab-3"
              data-cy="TabLink"
              onClick={() => setTab('tab-3')}
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
